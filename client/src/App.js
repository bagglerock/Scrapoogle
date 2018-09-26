import React, { Component } from "react";

import Hero from "../src/components/Hero/Hero";
import Nav from "../src/components/Nav/Nav";
import Results from "../src/components/Results/Results";

import scrape from "./utils/scrape";

import "./App.css";

class App extends Component {

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
        <Nav/>
        <Hero/>
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

export default App;
