const express = require('express');
const http = require('http');
const { Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Um usuário conectado');

  socket.on('message', (message) => {
    io.emit('message', message);
  });
  socket.on('disconnect', () => {
    console.log('Um usuário desconectado');
  });
});
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});



