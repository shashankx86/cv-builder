import React, { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Work from "./Work";
import Preview from "./Preview";

class Main extends Component {
    constructor() {
        super();

        this.state = {
            personalInfo: {},
            educationInfo: {},
            numberOfEducation: 1,
            workInfo: {},
            numberOfWork: 1,
        };

        this.addEducation = this.addEducation.bind(this);
        this.incrementEducation = this.incrementEducation.bind(this);
        this.addWork = this.addWork.bind(this);
        this.incrementWork = this.incrementWork.bind(this);
    }

    addEducation() {
        const numberOfEducation = this.state.numberOfEducation;
        const education = [];
        for (let i = 0; i < numberOfEducation; i++) {
            education.push(<Education />);
        }

        return education;
    }

    incrementEducation(e) {
        e.preventDefault();
        this.setState({
            numberOfEducation: (this.state.numberOfEducation += 1),
        });
    }

    addWork() {
        const numberOfWork = this.state.numberOfWork;
        const work = [];
        for (let i = 0; i < numberOfWork; i++) {
            work.push(<Work />);
        }

        return work;
    }

    incrementWork(e) {
        e.preventDefault();
        this.setState({
            numberOfWork: (this.state.numberOfWork += 1),
        });
    }

    render() {
        const education = this.addEducation();
        const work = this.addWork();

        return (
            <div className="main">
                <div className="inputContainer">
                    <form className="cvInputForm">
                        <h2>Personal Information</h2>
                        <Personal />
                        <h2>Education</h2>
                        {education}
                        <button onClick={this.incrementEducation}>Add</button>
                        <h2>Work Experience</h2>
                        {work}
                        <button onClick={this.incrementWork}>Add</button>
                    </form>
                    <Preview />
                </div>
                <div className="preview"></div>
            </div>
        );
    }
}

export default Main;
