const projects = require("../projects/projects-model");

function checkProjectId() {
  return (req, res, next) => {
    projects.get(req.params.id)
      .then(project => {
        if (project) {
          req.project = project
          next()
        } else {
          res.status(404).json({
            message: "Project Not Found"
          })
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = {
  checkProjectId,
}