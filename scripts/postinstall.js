#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

// Wrap in try-catch to prevent installation from failing
try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Only run for global installs
    if (!process.env.npm_config_global) {
        console.log('⚠️  Local install detected. Skipping desktop shortcut creation.');
        console.log('   For best experience, install globally: npm install -g kuiz-adventure-mega');
        process.exit(0);
    }

    const platform = process.platform;
    const homeDir = os.homedir();
    const desktopDir = path.join(homeDir, 'Desktop');

    // Get the global npm bin directory
    const npmBin = process.env.npm_config_prefix || 
        (platform === 'win32' ? path.join(process.env.APPDATA, 'npm') : '/usr/local/bin');

    console.log('\n🎮 Setting up Kuiz Adventure MEGA...\n');

    // Create desktop shortcut based on platform
    if (platform === 'darwin') {
        // macOS - Create .command file (executable script)
        const shortcutPath = path.join(desktopDir, 'Kuiz Adventure.command');
        const kuizPath = path.join(npmBin, 'kuiz-adventure');
        const shortcutContent = `#!/bin/bash
# Kuiz Adventure MEGA Launcher
echo "🎮 Starting Kuiz Adventure MEGA..."
echo ""

# Try to find and run kuiz-adventure
if [ -x "${kuizPath}" ]; then
    "${kuizPath}"
elif command -v kuiz-adventure &> /dev/null; then
    kuiz-adventure
else
    echo "❌ Error: kuiz-adventure not found!"
    echo "Please run: npm install -g kuiz-adventure-mega"
    echo ""
    read -p "Press Enter to close..."
fi
`;
        
        try {
            fs.writeFileSync(shortcutPath, shortcutContent, { mode: 0o755 });
            console.log('✅ Desktop shortcut created: Kuiz Adventure.command');
            console.log('   📍 Location: ~/Desktop/');
            console.log('   🖱️  Double-click to launch!\n');
        } catch (error) {
            console.log('⚠️  Could not create desktop shortcut:', error.message);
        }
        
    } else if (platform === 'win32') {
        // Windows - Create .bat file
        const shortcutPath = path.join(desktopDir, 'Kuiz Adventure.bat');
        const shortcutContent = `@echo off
title Kuiz Adventure MEGA
echo Starting Kuiz Adventure MEGA...
echo.
call kuiz-adventure
if errorlevel 1 (
    echo.
    echo Error: kuiz-adventure not found!
    echo Please run: npm install -g kuiz-adventure-mega
    echo.
    pause
)
`;
        
        try {
            fs.writeFileSync(shortcutPath, shortcutContent);
            console.log('✅ Desktop shortcut created: Kuiz Adventure.bat');
            console.log('   📍 Location: Desktop');
            console.log('   🖱️  Double-click to launch!\n');
        } catch (error) {
            console.log('⚠️  Could not create desktop shortcut:', error.message);
        }
        
    } else {
        // Linux - Create .desktop file
        const shortcutPath = path.join(desktopDir, 'kuiz-adventure.desktop');
        const shortcutContent = `[Desktop Entry]
Version=1.0
Type=Application
Name=Kuiz Adventure MEGA
Comment=Educational Quiz for Malaysian Students
Exec=${path.join(npmBin, 'kuiz-adventure')}
Icon=applications-games
Terminal=true
Categories=Education;Game;
`;
        
        try {
            fs.writeFileSync(shortcutPath, shortcutContent, { mode: 0o755 });
            console.log('✅ Desktop shortcut created: kuiz-adventure.desktop');
            console.log('   📍 Location: ~/Desktop/');
            console.log('   🖱️  Double-click to launch!\n');
        } catch (error) {
            console.log('⚠️  Could not create desktop shortcut:', error.message);
        }
    }

    console.log('🎉 Installation complete!\n');
    console.log('You can launch Kuiz Adventure by:');
    console.log('  1. 🖱️  Double-clicking the desktop shortcut');
    console.log('  2. ⌨️  Running "kuiz-adventure" in terminal\n');

} catch (error) {
    console.error('⚠️  Postinstall script failed:', error.message);
    console.log('   Don\'t worry! You can still run: kuiz-adventure\n');
    // Don't exit with error to prevent npm install from failing
    process.exit(0);
}
