const path = require("path");

const htmlRoutes = (app) => {
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });
    
      app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });
}

module.exports = htmlRoutes;