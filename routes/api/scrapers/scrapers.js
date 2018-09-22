const router = require("express").Router();
const googleScraper = require("../../../controllers/googleScraper");

router
  .route("/google/")
  .post(googleScraper.getArticles);

module.exports = router;