import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log("server is running");
});

const wss = new WebSocketServer({ server });
wss.on('connection', (ws) => {
    console.log('New client connected');
    
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send("Thanks for your message!");
    });
    
    ws.on('close', () => {
        console.log('Client disconnected');
    });
    }
);
