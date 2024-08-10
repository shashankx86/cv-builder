import React, { Component } from "react";
import "../styles/formInput.css";

class Personal extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="personal">
                <input
                    type={"text"}
                    id="name"
                    name="name"
                    placeholder="Name"
                ></input>
                <input
                    type={"text"}
                    id="title"
                    name="title"
                    placeholder="Title"
                ></input>
                <input
                    type={"text"}
                    id="address"
                    name="address"
                    placeholder="Address"
                ></input>
                <input
                    type={"tel"}
                    id="tel"
                    name="tel"
                    placeholder="Phone Number"
                ></input>
                <input
                    type={"email"}
                    id="email"
                    name="email"
                    placeholder="Email"
                ></input>
                <input
                    type={"text"}
                    id="web"
                    name="web"
                    placeholder="Website"
                ></input>
                <textarea
                    id="profile"
                    className="profile span2"
                    name="profile"
                    rows={8}
                    cols={80}
                    placeholder="Profile"
                ></textarea>
            </div>
        );
    }
}

export default Personal;
