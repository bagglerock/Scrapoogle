import React from "react";

import nav from "./Nav.css";

const Nav = () => (
    <div className={nav.container}>
        <ul>
            <li className={nav.link}>Articles</li>
            <li className={nav.link}>Saved Articles</li>
        </ul>
    </div>
)

export default Nav;