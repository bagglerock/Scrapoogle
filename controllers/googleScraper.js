const axios = require("axios");
const cheerio = require("cheerio");

//THIS WAS COPYPASTAD FROM THE ORIGINAL SCRAPPY>>>
//things to do:

// make it strictly get the articles as a json response and thats it... do all other things in other functions

module.exports = {

    // getArticles: function(req, res) {
    //     let scrapedArticles = [];
    //     let newArticles = [];
    //     let promises = [];
    //     axios.get('https://news.google.com/').then(function (response) {
    //             let $ = cheerio.load(response.data);
    //             $("article").each(function (i, element) {

    //                 let result = {};
    //                 result.title = $(this).children("div").children("div").children("h4").children("a").children("span").text();
    //                 result.link = $(this).children("div").children("div").children("h4").children("a").attr("href");
    //                 result.summary = $(this).children("div").children("div").children("p").text();
    //                 result.isSaved = false;

    //                 if (result.title !== "" && result.link !== "") {
    //                     scrapedArticles.push(result);
    //                 }

    //             })

    //             for (let i = 0; i < scrapedArticles.length; i++) {
    //                 promises.push(findArticle(scrapedArticles[i]));
    //             }
    //             Promise.all(promises).then(function (checkedArticles) {
    //                 newArticleCount = 0;
    //                 for (let i = 0; i < checkedArticles.length; i++) {
    //                     if (!checkedArticles[i].isSaved) {
    //                         newArticleCount++;
    //                     }
    //                     newArticles.push(checkedArticles[i]);
    //                 }

    //                 let hbsObject = {
    //                     newArticles: newArticles,
    //                     newArticleCount: newArticleCount
    //                 }
    //                 res.render("index", hbsObject);
    //             })

    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             res.send(error);
    //         });
    // },

    test: function(req, res){
        const obj = {
            test: "test"
        }

        res.json(obj);
    }

};