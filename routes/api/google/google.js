const router = require("express").Router();
const googleScraper = require("../../../controllers/googleScraper");

// router.route("/google").post(googleScraper.getArticles);

router.route("/google").get(googleScraper.test);

module.exports = router;