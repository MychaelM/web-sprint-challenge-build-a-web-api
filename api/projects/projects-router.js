const express = require("express");
const projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  projects
    .get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", (req, res) => {
  projects
    .get(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res) => {
  projects
    .insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      next(err);
    });
});

router.put("/:id", (req, res) => {
  projects
    .update(req.params.id, req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", (req, res) => {
  projects.remove(req.params.id)
    .then((count) => {
      if (count === 1) {
        res.status(200).json({
          message: "Project successfully deleted"
        })
      }
    })
    .catch((err) => {
      next();
    })
})

module.exports = router;
