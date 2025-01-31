import React, { Component } from "react";
import "../styles/preview.css";

import emailIcon from "../assets/email.png";
import telIcon from "../assets/smartphone-call.png";
import portfolioIcon from "../assets/web.png";
import locationIcon from "../assets/location-pin.png";

class PopulatePersonal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personalInfo } = this.props;

        const contactInfo = [];
        if (personalInfo.content.email) {
            contactInfo.push(
                <div className="contactItem">
                    <img className="contactIcon" src={emailIcon} alt=""></img>
                    <p className="email">{personalInfo.content.email}</p>
                </div>
            );
        }
        if (personalInfo.content.tel) {
            contactInfo.push(
                <div className="contactItem">
                    <img className="contactIcon" src={telIcon} alt=""></img>
                    <p className="tel">{personalInfo.content.tel}</p>
                </div>
            );
        }
        if (personalInfo.content.web) {
            contactInfo.push(
                <div className="contactItem">
                    <img
                        className="contactIcon"
                        src={portfolioIcon}
                        alt=""
                    ></img>
                    <p className="web">{personalInfo.content.web}</p>
                </div>
            );
        }

        if (personalInfo.content.address) {
            contactInfo.push(
                <div className="contactItem">
                    <img
                        className="contactIcon"
                        src={locationIcon}
                        alt=""
                    ></img>
                    <p className="address">{personalInfo.content.address}</p>
                </div>
            );
        }

        return (
            <div className="personalContainer">
                <div className="personalSection">
                    <div>
                        <p className="name">{personalInfo.content.name}</p>
                        <p className="title">{personalInfo.content.title}</p>
                    </div>
                    <div className="contactInfo">{contactInfo}</div>
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
            let dates = [];
            if (element.content.uniFrom && element.content.uniTo) {
                dates.push(
                    <p className="uniDates">{`${element.content.uniFrom} - ${element.content.uniTo}`}</p>
                );
            } else {
                dates.push(<p></p>);
            }
            let section = (
                <div className="educationSection">
                    <div>
                        <p className="degree">{element.content.degree}</p>
                        <p className="uni">{element.content.uni}</p>
                    </div>
                    <div className="locationDate">
                        <p className="uniCity">{element.content.uniCity}</p>
                        {dates}
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
            let dates = [];
            if (element.content.workFrom && element.content.workTo) {
                dates.push(
                    <p className="workDates">{`${element.content.workFrom} - ${element.content.workTo}`}</p>
                );
            } else {
                dates.push(<p></p>);
            }
            let section = (
                <div className="workSection">
                    <div className="workSectionMain">
                        <div>
                            <p className="position">
                                {element.content.position}
                            </p>
                            <p className="company">{element.content.company}</p>
                        </div>
                        <div className="locationDate">
                            <p className="workCity">
                                {element.content.workCity}
                            </p>
                            {dates}
                        </div>
                    </div>
                    <div className="workSectionDetails">
                        <p>{element.content.workDetail}</p>
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
