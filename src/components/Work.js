import React, { Component } from "react";

class Work extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="work">
                <input
                    type={"text"}
                    id="position"
                    name="position"
                    placeholder="Position"
                ></input>
                <input
                    type={"text"}
                    id="company"
                    name="company"
                    placeholder="Company"
                ></input>
                <input
                    type={"text"}
                    id="workCity"
                    name="workCity"
                    placeholder="City"
                ></input>
                <input
                    type={"date"}
                    id="workFrom"
                    name="workFrom"
                    placeholder="From"
                ></input>
                <input
                    type={"date"}
                    id="workTo"
                    name="workTo"
                    placeholder="To"
                ></input>
                <label htmlFor="workPresent">I currently work here</label>
                <input
                    type={"checkbox"}
                    id="workPresent"
                    name="workPresent"
                ></input>
            </div>
        );
    }
}

export default Work;
