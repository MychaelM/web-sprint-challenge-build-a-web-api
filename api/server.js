const express = require('express');
const server = express();

server.use(express.json());

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.get('/', (req, res) => {
  res.send(`<h2>Hello From Server</h2>`)
})

module.exports = server;
