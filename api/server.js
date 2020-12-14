const express = require('express');
const actionRoutes = require('./actions/actions-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Hello From Server</h2>`)
})

server.use('/api/actions', actionRoutes)

module.exports = server;
