import React, { Component } from "react";

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
                    id="description"
                    name="description"
                    rows={4}
                    cols={50}
                    placeholder="Description (Optional)"
                ></textarea>
            </div>
        );
    }
}

export default Personal;
