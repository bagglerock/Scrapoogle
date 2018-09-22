const router = require("express").Router();
const googleScraper = require("../../../../controllers/googleScraper");

// router.route("/google").post(googleScraper.getArticles);

router
    .route("/")
    .post(googleScraper.getArticles);

module.exports = router;