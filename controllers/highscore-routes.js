const router = require("express").Router();
const sequelize = require("../config/connection");
const { Score, User } = require("../models");

router.get("/", (req, res) => {
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

// get user by id
// http://localhost:3001/api/users/5
router.get("/profilerender/:id", (req, res) => {
  console.log("retrieve max score");
  User.findOne({
    where: {
      id: req.params.id, // session later
    },
    include: [
      {
        model: Score, // also return any scores tied to this user
        attributes: ["id", "score", "created_at"],
      },
    ],
  })
    .then((dbUserData) => {
      console.log(dbUserData.scores);
      // loop through scores array. and define specific variables to be passed as the page renders

      // logic to find hard
      highscore = 0; // loop through ot get

      // look at .reduce option or for loop
      const scores = dbUserData.scores.map((score) =>
        score.get({ plain: true })
      );
      console.log(scores);

      // or make into decosntructed object and then pass it
      res.render("highscores", {
        user: dbUserData.username,
        email: dbUserData.email,
        highScore: highscore,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
