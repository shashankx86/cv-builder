import React, { Component } from "react";
import "../styles/formInput.css";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { index, deleteEducation } = this.props;
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
                    className="span2"
                    name="degree"
                    placeholder="Degree"
                ></input>
                <input
                    type={"text"}
                    id={`uniFrom${index}`}
                    name="uniFrom"
                    placeholder="From"
                ></input>
                <input
                    type={"text"}
                    id={`uniTo${index}`}
                    name="uniTo"
                    placeholder="To"
                ></input>
                {/* 
                <label htmlFor={`uniPresent${index}`}>
                    I currently go here
                </label>
                <input
                    type={"checkbox"}
                    id={`uniPresent${index}`}
                    name="uniPresent"
                ></input>
                */}
                <button
                    className="deleteBtn span2"
                    onClick={(e) => {
                        e.preventDefault();
                        deleteEducation(index);
                    }}
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Education;
