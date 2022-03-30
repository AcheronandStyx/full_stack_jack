const router = require("express").Router();
const { User, Score } = require("../../models");

// test routes
router.get("/", (req, res) => {
  Score.findAll({})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Score.create({
    username: req.body.username,
    score: req.body.score,
    date: req.body.date,
    user_id: req.body.date, // will need to be changed to use the logged in users session to find the id
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
