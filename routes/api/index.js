const router = require("express").Router();

const db = require("./db/db");
const scrapers = require("./scrapers/scrapers");

router.use("/db", db);
router.use("/scrapers", scrapers);

module.exports = router;