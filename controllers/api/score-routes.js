const router = require("express").Router();
const { User, Score } = require("../../models");
// const { sequelize } = require("../../models/User");

// get all scores
// http://localhost:3001/api/scores
router.get("/", (req, res) => {
  Score.findAll({})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single score by id
//localhost:3001/api/scores/5
http: router.get("/:id", (req, res) => {
  Score.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No score found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Idea: If we have time for a user profile page
// Do a Score.findAll by the user_id field
// Use that to create a personalized high score listing on their profile?
// Route not needed since scores are tacked onto the find user by ID route
// leaving for reference
router.get("/:user_id", (req, res) => {
  Score.findAll({
    where: {
      user_id: req.params.user_id,
    },
    order: [["score", "DESC"]],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No score found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post new score
// http://localhost:3001/api/scores
router.post("/", (req, res) => {
  Score.create({
    score: req.body.score,
    user_id: req.body.user_id, // will need to be changed to use the logged in users session to find the id
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
