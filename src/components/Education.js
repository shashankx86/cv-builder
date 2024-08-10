import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { index, deleteComponent } = this.props;
        return (
            <div className="education">
                <input
                    type={"text"}
                    id={`uni${index}`}
                    name="uni"
                    placeholder="University Name"
                ></input>
                <input
                    type={"text"}
                    id={`uniCity${index}`}
                    name="uniCity"
                    placeholder="City"
                ></input>
                <input
                    type={"text"}
                    id={`degree${index}`}
                    name="degree"
                    placeholder="Degree"
                ></input>
                <input
                    type={"text"}
                    id={`subject${index}`}
                    name="subject"
                    placeholder="Subject"
                ></input>
                <input
                    type={"date"}
                    id={`uniFrom${index}`}
                    name="uniFrom"
                    placeholder="From"
                ></input>
                <input
                    type={"date"}
                    id={`uniTo${index}`}
                    name="uniTo"
                    placeholder="To"
                ></input>
                <label htmlFor="uniPresent">I currently go here</label>
                <input
                    type={"checkbox"}
                    id={`uniPresent${index}`}
                    name="uniPresent"
                ></input>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        deleteComponent();
                    }}
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Education;
