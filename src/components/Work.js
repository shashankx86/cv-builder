import React, { Component } from "react";
import "../styles/formInput.css";

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { index, deleteWork } = this.props;
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
                    className="span2"
                    name="workCity"
                    placeholder="City"
                ></input>
                <input
                    type={"text"}
                    id={`workFrom${index}`}
                    name="workFrom"
                    placeholder="From"
                ></input>
                <input
                    type={"text"}
                    id={`workTo${index}`}
                    name="workTo"
                    placeholder="To"
                ></input>
                {/*  
                <label htmlFor={`workPresent${index}`}>
                    I currently work here
                </label>
                <input
                    type={"checkbox"}
                    id={`workPresent${index}`}
                    name="workPresent"
                ></input>
                */}
                <textarea
                    id={`workDetail${index}`}
                    className="workDetail span2"
                    name="description"
                    rows={8}
                    cols={80}
                    placeholder="Details"
                ></textarea>
                <button
                    className="deleteBtn span2"
                    onClick={(e) => {
                        e.preventDefault();
                        deleteWork(index);
                    }}
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Work;
