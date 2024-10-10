const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('MES Integration Dashboard API');
});

io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Simulate equipment data and send to client
  setInterval(() => {
    const equipmentData = {
      id: 1,
      status: 'running',
      temperature: Math.random() * 100,
      pressure: Math.random() * 100,
    };
    socket.emit('equipmentData', equipmentData);
  }, 1000);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});