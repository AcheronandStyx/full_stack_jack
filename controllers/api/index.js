const router = require('express').Router();

// const userRoutes = require('./user-routes.js');

// router.use('/users', userRoutes);
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

module.exports = router;