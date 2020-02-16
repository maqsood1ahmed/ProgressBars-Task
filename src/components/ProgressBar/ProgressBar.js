import React from "react";

import "./PrgoressBar.scss";
import propTypes from "prop-types";

const progressBar = {
    width: "100%",
    height: "50px",
    boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.66)"
};

const ProgressBar = (props) => {
    let percentage = ((props.percentage >= 100) ? 100 : props.percentage) + "%";
    const progressBarProgress = {
        width: percentage,
        height: "100%",
        backgroundColor: ((props.percentageShow >= 100) ? "red" : "#3498db"),
        marginTop: "10px",
        position: "relative",
        transition: "width 0.3s ease in out"
    };
    let textStyle = {
        position: "absolute",
        marginTop: "-45px",
        left: "50%",
        fontSize: "25px"
    };
    return (
        <div className="progress-bar" style={progressBar}>
            <div className="progress-bar-progress" style={progressBarProgress} />
            <p style={textStyle}>{props.percentageShow}%</p>
        </div>
    );
};

ProgressBar.propTypes = {
    percentage: propTypes.number,
    percentageShow: propTypes.number
};

export default ProgressBar;
