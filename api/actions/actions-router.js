const express = require('express');
const actions = require('./actions-model');
const { checkActionProjectId } = require("../middleware/actions-middleware");


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

router.post('/', checkActionProjectId(), (req, res) => {
  actions.insert(req.body)
    .then((action) => {
      res.status(201).json(action)
    })
    .catch((err) => {
      next(err)
    })
})

router.put('/:id', (req, res) => {
  actions.update(req.params.id, req.body)
    .then((action) => {
      res.status(200).json(action)
    })
    .catch((err) => {
      next(err)
    })
})

router.delete('/:id', (req, res) => {
  actions.remove(req.params.id)
    .then((count) => {
      if(count === 1) {
        res.status(200).json({
          message: "Action has been deleted"
        })
      }
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;