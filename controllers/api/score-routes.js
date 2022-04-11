const router = require("express").Router();
const { User, Score } = require("../../models");
const { sequelize } = require("../../models/User");
const withAuth = require("../../utils/auth");

// get all scores
router.get("/", (req, res) => {
  Score.findAll({})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single score by id
router.get("/:id", (req, res) => {
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
