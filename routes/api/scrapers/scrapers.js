const router = require("express").Router();
const googleScraper = require("../../../controllers/googleScraper");

router
  .route('/google/')
  .get(googleScraper.getArticles);

module.exports = router;