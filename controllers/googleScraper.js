const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {

    getArticles: function(req, res) {
        let scrapedArticles = [];

        axios.get("https://news.google.com/")
        .then(response => {
            let $ = cheerio.load(response.data);
            $("article").each(function() {
                let result = {};
                result.title = $(this).children("div").children("div").children("h4").children("a").children("span").text();
                result.link = $(this).children("div").children("div").children("h4").children("a").attr("href");
                result.summary = $(this).children("div").children("div").children("p").text();
                
                if (result.title !== "" && result.link !== "") {
                    scrapedArticles.push(result);
                }

            })
            console.log("hello");
            res.json(scrapedArticles);

        })

    },
};