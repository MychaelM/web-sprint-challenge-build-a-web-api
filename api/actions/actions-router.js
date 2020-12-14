const express = require('express');
const actions = require('./actions-model');

const router = express.Router();

router.get('/', (req, res) => {
  actions.get()
    .then((actions) => {
      res.status(200).json(actions)
    })
    .catch((err) => {
      next(err)
    })
})

router.get('/:id', (req, res) => {
  actions.get(req.params.id)
    .then((action) => {
      res.status(200).json(action)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/', (req, res) => {
  actions.insert(req.body)
    .then((action) => {
      res.status(201).json(action)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;