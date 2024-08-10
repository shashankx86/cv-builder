import React, { Component } from "react";
import "../styles/preview.css";

class PopulatePersonal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personalInfo } = this.props;
        return (
            <div className="personalContainer">
                <div className="personalSection">
                    <div>
                        <p className="name">{personalInfo.content.name}</p>
                        <p className="title">{personalInfo.content.title}</p>
                    </div>
                    <div className="contactInfo">
                        <p className="tel">{personalInfo.content.tel}</p>
                        <p className="email">{personalInfo.content.email}</p>
                        <p className="web">{personalInfo.content.web}</p>
                        <p className="address">
                            {personalInfo.content.address}
                        </p>
                    </div>
                </div>
                <hr className="personalDivide"></hr>
                <div className="descriptionSection">
                    {personalInfo.content.profile}
                </div>
            </div>
        );
    }
}

class PopulateEducation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { educationInfoList } = this.props;
        let educationSections = [];
        educationInfoList.forEach((element) => {
            let section = (
                <div className="educationSection">
                    <div>
                        <p className="degree">{element.content.degree}</p>
                        <p className="uni">{element.content.uni}</p>
                    </div>
                    <div>
                        <p className="uniCity">{element.content.uniCity}</p>
                    </div>
                </div>
            );

            educationSections.push(section);
        });

        return <div className="educationSections">{educationSections}</div>;
    }
}

class PopulateWork extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { workInfoList } = this.props;
        let workSections = [];
        workInfoList.forEach((element) => {
            let section = (
                <div className="workSection">
                    <div>
                        <p className="position">{element.content.position}</p>
                        <p className="company">{element.content.company}</p>
                    </div>
                    <div>
                        <p className="workCity">{element.content.workCity}</p>
                    </div>
                </div>
            );

            workSections.push(section);
        });

        return <div className="workSections">{workSections}</div>;
    }
}

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personalInfo, educationInfoList, workInfoList } = this.props;
        return (
            <div className="previewContainer">
                <PopulatePersonal personalInfo={personalInfo} />
                <div className="educationContainer">
                    <h2 className="cvHeader">Education</h2>
                    <PopulateEducation educationInfoList={educationInfoList} />
                </div>
                <div className="workContainer">
                    <h2 className="cvHeader">Work Experience</h2>
                    <PopulateWork workInfoList={workInfoList} />
                </div>
            </div>
        );
    }
}

export default Preview;
