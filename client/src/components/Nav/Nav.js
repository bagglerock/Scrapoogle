import React from "react";

import nav from "./Nav.css";

const Nav = (props) => {

    const _handleClick = (e) => {
        props.action();
    }

    return (
        <div className={nav.container}>
            <ul>
                <li className={nav.link}>Articles</li>
                <li className={nav.link}>Saved Articles</li>
                <li className={nav.link}>Sign Up</li>
                <li className={nav.link} onClick={(e) => _handleClick(e, props.action)}>Login</li>
            </ul>
        </div>
    )
}

export default Nav;