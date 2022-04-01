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
