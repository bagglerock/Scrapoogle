import React, { Component } from "react";


import Results from "../../../src/components/Results/Results";

import scrape from "../../utils/scrape";

import "./Home.css";

class Home extends Component{

    state = {
        articles: []
      }
    
      componentDidMount() {
        this.getArticles().then(res => {
          this.setState({
            articles: res.data
          })
        })
      }
    
      getArticles = () => {
        let promise = new Promise((resolve, reject) => {
          scrape.getArticles().then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          })
        })
        return promise;
      }
    
      render() {
    
        console.log(this.state.articles);
    
        return (
          <div>
            <div>
              {this.state.articles.map((article, i)=> (
                <Results
                  key={i}
                  title={article.title}
                  summary={article.summary}
              />
              ))}
            </div>
          </div>
        )
      }


}

export default Home;