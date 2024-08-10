import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header">
                <h1>CV Builder</h1>
            </div>
        );
    }
}

export default Header;
