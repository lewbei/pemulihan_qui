# Kuiz Adventure MEGA

3+ Years of Educational Quizzes for Malaysian Primary School Students

> ⚠️ **Note:** Some quiz questions are still under review and checking. Content accuracy is being continuously improved.

## Features

- 🎯 **Multi-Profile System** - Track progress for multiple students
- 📚 **Comprehensive Content** - Bahasa Malaysia and Mathematics questions
- 📊 **Real-time Analytics** - Performance tracking and progress reports
- 📱 **PWA Ready** - Works offline on mobile devices
- 🎮 **Gamified Learning** - XP, coins, and streaks to motivate students
- 📈 **Progress Export** - Download detailed analytics in CSV format

## Installation

### Quick Install (Global) - Recommended

Install globally to use anywhere on your system:

```bash
npm install -g kuiz-adventure-mega
kuiz-adventure
```

Then open your browser to `http://localhost:8000`

**Note:** This package is designed for **global installation only**. Always use the `-g` flag when installing.

**🎉 Desktop Shortcut:** After installation, a shortcut will be created on your desktop:
- **macOS:** `Kuiz Adventure.command` - Double-click to launch
- **Windows:** `Kuiz Adventure.bat` - Double-click to launch  
- **Linux:** `kuiz-adventure.desktop` - Double-click to launch

### Prerequisites
- Node.js 14.0.0 or higher
- npm (usually comes with Node.js)

### Platform-Specific Setup

#### Windows
1. Open **Command Prompt (cmd.exe)** (not PowerShell)
2. Navigate to your project directory
3. Run the commands below

#### macOS/Linux
1. Open **Terminal**
2. Navigate to your project directory
3. Run the commands below

### Install and Run from Source

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/lewbei/pemulihan_qui.git
   cd pemulihan_qui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   
   **Windows (cmd.exe):**
   ```cmd
   node serve.js
   ```
   
   **macOS/Linux:**
   ```bash
   npm start
   # or
   node serve.js
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:8000/kuiz_game.html
   ```

5. **Stop the server:**
   - Press `Ctrl+C` in the terminal
   - The server will shut down gracefully
   - Closing the terminal window also stops the server

## Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server (same as start)
- `npm run serve` - Alternative way to start the server
- `npm test` - Run tests (placeholder for future tests)
- `npm run lint` - Run linting (placeholder for future linting)
- `npm run build` - Build the project (currently no build step needed)

### Development Mode

For development with auto-restart, you can use nodemon:

```bash
npm install -g nodemon
nodemon serve.js
```

## Project Structure

```
├── kuiz_game.html          # Main application entry point
├── kuiz-styles.css         # Application styles
├── manifest.json           # PWA manifest
├── serve.js               # Express server
├── js/                    # JavaScript modules
│   ├── main.js           # Main application logic
│   ├── core/             # Core utilities
│   └── data/             # Data management
├── scripts/              # Legacy scripts
├── kp/                   # Educational content
│   ├── bm/              # Bahasa Malaysia content
│   ├── math/            # Mathematics content
│   └── skills.js        # Skills definitions
├── assets/              # Static assets
└── service-worker.js    # PWA service worker
```

## Usage

1. **Create Student Profiles** - Add multiple students with custom avatars
2. **Select Subject and Level** - Choose BM or Math at appropriate difficulty
3. **Start Quiz Session** - Answer 10 questions per session
4. **Track Progress** - View analytics, streaks, and performance metrics
5. **Export Reports** - Download detailed progress reports

## Technology Stack

- **Frontend:** Vanilla JavaScript (ES6 Modules), HTML5, CSS3
- **Backend:** Node.js with Express
- **Storage:** LocalStorage (client-side)
- **PWA:** Service Worker, Web App Manifest
- **Analytics:** Custom tracking system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please use the GitHub issue tracker.