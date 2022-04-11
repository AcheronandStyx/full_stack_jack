const router = require("express").Router();
const sequelize = require("../config/connection");
const { Score, User } = require("../models");
const withAuth = require("../utils/auth");

// Render High Scores
router.get("/", withAuth, (req, res) => {
  console.log("triggered");
  Score.findAll({
    attributes: ["id", "score", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
    order: [["score", "DESC"]],
  })
    .then((dbScoreData) => {
      const scores = dbScoreData.map((score) => score.get({ plain: true }));
      console.log(scores);
      res.render("highscores", {
        scores,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
