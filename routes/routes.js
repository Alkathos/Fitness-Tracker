const app = require('../server');
const path = require ('path');

app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/exercise.html"));
  });

app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/stats.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/index.html"));
  });