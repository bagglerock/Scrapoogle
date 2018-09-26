import React, { Component } from "react";

import Results from "../../components/Results/Results";

import "./Saved.css";

class Saved extends Component {
    state = {
        savedArticles: []
    }

    render() {
        return(
            <div>
                {this.state.savedArticles.map((article, i) => (
                    <Results
                        key={i}
                        title={article.title}
                        summary={article.summary}
                    />
                ))}
            </div>
        )
    }

}

export default Saved;