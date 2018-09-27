import React from "react";

import results from "./Results.css";

const Results = props => (
    <div className={results.container}>
        <div className={results.title}>
            <a href={props.link} target="_blank"><h1>{props.title}</h1></a>
        </div>
        <div className={results.summary}>
            <p>{props.summary}</p>
        </div>
    </div>
)

export default Results;