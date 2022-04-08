const router = require("express").Router();
const withAuth = require("../utils/auth");

const req = require("express/lib/request");
const sequelize = require("../config/connection");

/*
router.get("/game_content", (req, res) => {
    res.render("game_content");
    });
*/

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/game-page", withAuth, (req, res) => {
  res.render("game_content", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/user-profile", withAuth, (req, res) => {
  res.render("user-profile", {
    loggedIn: req.session.loggedIn
  });
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
