const router = require("express").Router();

const scrapers = require("./scrapers/");


router.use("/scrapers", scrapers);

module.exports = router;