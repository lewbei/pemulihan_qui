#!/usr/bin/env node
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.js': 'text/javascript; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=UTF-8',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return MIME_TYPES[ext] || 'application/octet-stream';
}

function sendNotFound(res) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('404 Not Found');
}

function sendError(res, error) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end(`Server error: ${error.message}`);
}

const server = http.createServer((req, res) => {
    const urlPath = decodeURI(req.url.split('?')[0]);
    const requestedPath = urlPath === '/' ? '/kuiz_game.html' : urlPath;
    const safePath = path.normalize(requestedPath).replace(/^\.\.[/\\]/, '');
    const filePath = path.join(ROOT_DIR, safePath);

    if (!filePath.startsWith(ROOT_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(filePath, (statErr, stats) => {
        if (statErr) {
            if (statErr.code === 'ENOENT') {
                sendNotFound(res);
            } else {
                sendError(res, statErr);
            }
            return;
        }

        if (stats.isDirectory()) {
            const indexPath = path.join(filePath, 'index.html');
            fs.stat(indexPath, (indexErr, indexStats) => {
                if (indexErr || !indexStats.isFile()) {
                    sendNotFound(res);
                    return;
                }
                streamFile(indexPath, res);
            });
            return;
        }

        streamFile(filePath, res);
    });
});

function streamFile(filePath, res) {
    const stream = fs.createReadStream(filePath);
    stream.on('open', () => {
        res.writeHead(200, { 'Content-Type': getContentType(filePath) });
        stream.pipe(res);
    });
    stream.on('error', (error) => {
        sendError(res, error);
    });
}

server.listen(PORT, () => {
    console.log(`\n✓ Kuiz Adventure MEGA server started successfully!`);
    console.log(`\n📚 Access the quiz at:`);
    console.log(`   → http://localhost:${PORT}/kuiz_game.html`);
    console.log(`   → http://localhost:${PORT}`);
    console.log(`\n💡 Press Ctrl+C to stop the server\n`);
});

// Graceful shutdown handling
const shutdown = (signal) => {
    console.log(`\n\n⚠️  Received ${signal}. Shutting down gracefully...`);
    server.close(() => {
        console.log('✓ Server closed. All connections terminated.');
        console.log('👋 Goodbye!\n');
        process.exit(0);
    });

    // Force close after 10 seconds if graceful shutdown fails
    setTimeout(() => {
        console.error('⚠️  Forcefully shutting down...');
        process.exit(1);
    }, 10000);
};

// Handle different termination signals
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// Handle uncaught errors
process.on('uncaughtException', (error) => {
    console.error('\n❌ Uncaught Exception:', error.message);
    console.error(error.stack);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('\n❌ Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
