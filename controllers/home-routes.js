const router = require("express").Router();
const withAuth = require("../utils/auth");

const req = require("express/lib/request");
const sequelize = require("../config/connection");

// Landing Page is login.handlebars
router.get("/", (req, res) => {
  res.render("login");
});

// nav bar link to login.handlebars
router.get("/login", (req, res) => {
  console.log("triggered login");
  res.render("login");
});

// game_content.handlebars
router.get("/game-page", withAuth, (req, res) => {
  res.render("game_content", {
    loggedIn: req.session.loggedIn,
  });
});

// user-profile.handlebars
router.get("/user-profile", withAuth, (req, res) => {
  res.render("user-profile", {
    loggedIn: req.session.loggedIn,
  });
});

// create-user.handlebars
router.get("/create-user", (req, res) => {
  console.log("triggered signup form");
  res.render("create-user");
});

module.exports = router;
