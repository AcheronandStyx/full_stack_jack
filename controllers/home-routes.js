const router = require("express").Router();

const sequelize = require("../config/connection");

/*
router.get("/game_content", (req, res) => {
    res.render("game_content");
    });
*/

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/game-page", (req, res) => {
  res.render("game_content");
});

router.get("/user-profile", (req, res) => {
  res.render("user-profile");
})

router.get("/login", (req, res) => {
  console.log("triggered login");
  res.render("login");
});

router.get("/create-user", (req, res) => {
  console.log("triggered signup form");
  res.render("create-user");
});

router.get("/game-content", (req, res) => {
  res.render("game_content");
});

router.get("/dashbaord", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
