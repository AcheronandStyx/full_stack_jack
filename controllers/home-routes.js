const router = require("express").Router();

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
