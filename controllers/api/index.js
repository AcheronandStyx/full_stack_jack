const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const scoreRoutes = require("./score-routes.js");

router.use("/users", userRoutes);
router.use("/scores", scoreRoutes);

module.exports = router;
