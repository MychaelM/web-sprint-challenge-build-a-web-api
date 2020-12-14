const express = require('express');
const actionRoutes = require('./actions/actions-router');
const projectRoutes = require('./projects/projects-router');

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Hello From Server</h2>`)
})

server.use('/api/actions', actionRoutes)
server.use('/api/projects', projectRoutes)

function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(` [${time}] ${req.ip} ${req.method} ${req.url} `);

  next();
}

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong, please try again later"
  })
})

module.exports = server;
