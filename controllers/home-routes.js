const router = require("express").Router();

const sequelize = require("../config/connection");

/*
router.get("/", (req, res) => {
    res.render("game_content");
    });
*/

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  console.log("triggered login");
  console.log(req.session);
  res.render("login");
});

router.get("/create-user", (req, res) => {
  console.log("triggered signup form");
  console.log(req.session);
  res.render("create-user");
});

module.exports = router;
