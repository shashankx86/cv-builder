import React, { Component } from "react";
import uniqid from "uniqid";
import Personal from "./Personal";
import Education from "./Education";
import Work from "./Work";
import Preview from "./Preview";

class Main extends Component {
    constructor() {
        super();

        this.state = {
            personalInfo: { id: uniqid(), index: 0, content: {} },
            educationInfoList: [{ id: uniqid(), index: 0, content: {} }],
            numberOfEducation: 1,
            workInfoList: [{ id: uniqid(), index: 0, content: {} }],
            numberOfWork: 1,
        };

        this.addEducation = this.addEducation.bind(this);
        this.incrementEducation = this.incrementEducation.bind(this);
        this.addWork = this.addWork.bind(this);
        this.incrementWork = this.incrementWork.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange() {
        const personalComponent = document.querySelector(".personal");
        const educationalComponents = document.querySelectorAll(".education");
        const workComponents = document.querySelectorAll(".work");

        let personalContent = {};
        for (const child of personalComponent.children) {
            let value = child.value;
            let key = child.id;

            personalContent[key] = value;
        }

        let educationContentList = this.state.educationInfoList.slice();
        educationalComponents.forEach((component, index) => {
            let educationContent = {};
            for (const child of component.children) {
                let value = child.value;
                let key = child.id;

                educationContent[key] = value;
            }

            educationContentList[index].content = educationContent;
        });

        let workContentList = this.state.workInfoList.slice();
        workComponents.forEach((component, index) => {
            let workContent = {};
            for (const child of component.children) {
                let value = child.value;
                let key = child.id;

                workContent[key] = value;
            }

            workContentList[index].content = workContent;
        });

        this.setState({
            personalInfo: {
                id: this.state.personalInfo.id,
                index: this.state.personalInfo.index,
                content: personalContent,
            },
            educationInfoList: educationContentList,
            workInfoList: workContentList,
        });
    }

    addPersonal() {
        const personal = [];
        personal.push(<Personal />);

        return personal;
    }

    addEducation() {
        const education = [];
        for (let i = 0; i < this.state.numberOfEducation; i++) {
            education.push(
                <Education index={i} deleteComponent={this.deleteComponent} />
            );
        }

        return education;
    }

    addWork() {
        const work = [];
        for (let i = 0; i < this.state.numberOfWork; i++) {
            work.push(<Work deleteComponent={this.deleteComponent} />);
        }

        return work;
    }

    incrementEducation(e) {
        e.preventDefault();

        let educationInfo = {
            id: uniqid(),
            index: this.state.numberOfEducation,
            content: {},
        };

        this.setState({
            numberOfEducation: this.state.numberOfEducation + 1,
            educationInfoList:
                this.state.educationInfoList.concat(educationInfo),
        });
    }

    incrementWork(e) {
        e.preventDefault();

        let workInfo = {
            id: uniqid(),
            index: this.state.numberOfWork,
            content: {},
        };

        this.setState({
            numberOfWork: this.state.numberOfWork + 1,
            workInfoList: this.state.workInfoList.concat(workInfo),
        });
    }

    deleteComponent() {
        console.log("delete me");
    }

    render() {
        const { personalInfo, educationInfoList, workInfoList } = this.state;
        const personal = this.addPersonal();
        const education = this.addEducation();
        const work = this.addWork();

        return (
            <div className="main">
                <div className="inputContainer">
                    <form
                        className="cvInputForm"
                        onChange={this.handleFormChange}
                    >
                        <h2>Personal Information</h2>
                        {personal}
                        <h2>Education</h2>
                        {education}
                        <button onClick={this.incrementEducation}>Add</button>
                        <h2>Work Experience</h2>
                        {work}
                        <button onClick={this.incrementWork}>Add</button>
                    </form>
                </div>
                <div className="preview">
                    <Preview
                        personalInfo={personalInfo}
                        educationInfoList={educationInfoList}
                        workInfoList={workInfoList}
                    />
                </div>
            </div>
        );
    }
}

export default Main;
