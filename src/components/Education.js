import React, { Component } from "react";

class Education extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="education">
                <input
                    type={"text"}
                    id="uni"
                    name="uni"
                    placeholder="University Name"
                ></input>
                <input
                    type={"text"}
                    id="uniCity"
                    name="uniCity"
                    placeholder="City"
                ></input>
                <input
                    type={"text"}
                    id="degree"
                    name="degree"
                    placeholder="Degree"
                ></input>
                <input
                    type={"text"}
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                ></input>
                <input
                    type={"date"}
                    id="uniFrom"
                    name="uniFrom"
                    placeholder="From"
                ></input>
                <input
                    type={"date"}
                    id="uniTo"
                    name="uniTo"
                    placeholder="To"
                ></input>
                <label htmlFor="uniPresent">I currently go here</label>
                <input
                    type={"checkbox"}
                    id="uniPresent"
                    name="uniPresent"
                ></input>
            </div>
        );
    }
}

export default Education;
