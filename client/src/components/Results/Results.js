import React from "react";

import results from "./Results.css";

const Results = props => (
    <div className={results.container}>
        <div className={results.title}>
            <h1>{props.title}</h1>
        </div>
        <div className={results.summary}>
            <p>{props.summary}</p>
        </div>
    </div>
)

export default Results;