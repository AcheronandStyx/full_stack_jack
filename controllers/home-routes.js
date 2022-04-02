const router = require("express").Router();
const sequelize = require("../config/connection");

router.get('/', (req, res) => {
  
})

router.get("/login", (req, res) => {
  console.log("triggered login");
  console.log(req.session);
  res.render("login");
});

module.exports = router;
