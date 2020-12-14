const projects = require("./projects-model");

function checkProjectId() {
  return (req, res, next) => {
    projects.get(req.params.id)
      .then(user => {
        if (user) {
          req.user = user
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