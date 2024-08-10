import React, { Component } from "react";

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { index, deleteComponent } = this.props;
        return (
            <div className="work">
                <input
                    type={"text"}
                    id={`position${index}`}
                    name="position"
                    placeholder="Position"
                ></input>
                <input
                    type={"text"}
                    id={`company${index}`}
                    name="company"
                    placeholder="Company"
                ></input>
                <input
                    type={"text"}
                    id={`workCity${index}`}
                    name="workCity"
                    placeholder="City"
                ></input>
                <input
                    type={"date"}
                    id={`workFrom${index}`}
                    name="workFrom"
                    placeholder="From"
                ></input>
                <input
                    type={"date"}
                    id={`workTo${index}`}
                    name="workTo"
                    placeholder="To"
                ></input>
                <label htmlFor={`workPresent${index}`}>
                    I currently work here
                </label>
                <input
                    type={"checkbox"}
                    id={`workPresent${index}`}
                    name="workPresent"
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

export default Work;
