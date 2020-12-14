const projects = require("../projects/projects-model");

function checkActionProjectId() {
  return (req, res, next) => {
    projects
      .get(req.body.project_id)
      .then((project) => {
        if (project) {
          req.project = project;
          next();
        } else {
          res.status(404).json({
            message: "Project Not Found",
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  };
}

module.exports = {
  checkActionProjectId,
};
