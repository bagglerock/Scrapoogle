const router = require("express").Router();
const googleScraper = require("../../../../controllers/googleScraper");

// router.route("/google").post(googleScraper.getArticles);

router
    .route("/")
    .post(googleScraper.test);

module.exports = router;