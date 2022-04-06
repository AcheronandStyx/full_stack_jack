const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const scoreRoutes = require("./score-routes.js");
const commentRoutes = require("./comment-routes.js");

const homeRoutes = require("../home-routes.js");


router.use("/users", userRoutes);
router.use("/scores", scoreRoutes);
router.use("/comments", commentRoutes);
router.use("/", homeRoutes);


module.exports = router;
