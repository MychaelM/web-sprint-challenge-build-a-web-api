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

module.exports = router;