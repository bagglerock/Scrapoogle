import React from "react";

import nav from "./Nav.css";

const Nav = (props) => (
    <div className={nav.container}>

        {
            (props.blah)
            ?
            <p>there are props</p>
            :
            <p>there are not props</p>
        }
        <ul>
            <li className={nav.link}>New Articles</li>
            <li className={nav.link}>Saved Articles</li>
        </ul>
    </div>
)

export default Nav;