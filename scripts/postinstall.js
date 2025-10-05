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
                const shortcutLines = [
                        '#!/bin/bash',
                        '# Kuiz Adventure MEGA Launcher',
                        'echo "🎮 Starting Kuiz Adventure MEGA..."',
                        'echo ""',
                        '# Load user shell environment profiles',
                        '[ -f "$HOME/.zprofile" ] && source "$HOME/.zprofile"',
                        '[ -f "$HOME/.zshrc" ] && source "$HOME/.zshrc"',
                        '[ -f "$HOME/.bash_profile" ] && source "$HOME/.bash_profile"',
                        '[ -f "$HOME/.profile" ] && source "$HOME/.profile"',
                        '',
                        '# Append common global npm locations if missing',
                        'for d in /usr/local/bin /opt/homebrew/bin "$HOME/.npm-global/bin" "$HOME/.node/bin"; do',
                        '  [ -d "$d" ] && case ":$PATH:" in *":$d:"*) ;; *) PATH="$d:$PATH" ;; esac',
                        'done',
                        'export PATH',
                        '',
                        'echo "🔍 Searching for kuiz-adventure..."',
                        `TARGET_PATH="${kuizPath}"`,
                        'if [ -x "$TARGET_PATH" ]; then',
                        '  echo "✓ Using direct path: $TARGET_PATH"',
                        '  "$TARGET_PATH"',
                        'elif command -v kuiz-adventure >/dev/null 2>&1; then',
                        '  RESOLVED=$(command -v kuiz-adventure)',
                        '  echo "✓ Found in PATH: $RESOLVED"',
                        '  "$RESOLVED"',
                        'else',
                        '  echo "❌ Error: kuiz-adventure not found"',
                        '  echo "Tried direct path: $TARGET_PATH"',
                        '  echo "PATH: $PATH"',
                        '  echo "Fix suggestions:"',
                        '  echo "  1. Reinstall globally: npm install -g kuiz-adventure-mega"',
                        '  echo "  2. Ensure your global npm bin is in PATH"',
                        '  echo "  3. If using nvm, open a terminal and run: kuiz-adventure"',
                        '  read -p "Press Enter to close..."',
                        'fi'
                ];
                const shortcutContent = shortcutLines.join('\n');
        
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
