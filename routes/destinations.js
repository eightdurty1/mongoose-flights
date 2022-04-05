const express = require("express");
const router = express.Router();
const destinationsCtrl = require("../controllers/destinations");
// const reviewsCtrl = require('../controllers/destinations');

router.post("/flights/:id/destinations", destinationsCtrl.create);

module.exports = router;

// router.post('/movies/:id/reviews', reviewsCtrl.create);

//  module.exports = router;
