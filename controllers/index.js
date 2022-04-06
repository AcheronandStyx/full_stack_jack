const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const scoreRoutes = require("./highscore-routes.js");

router.use("/highscores", scoreRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
