import React from "react";

import "./PrgoressBar.scss";
import propTypes from "prop-types";

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            ProgressBar {props.percentage}
        </div>
    );
};

ProgressBar.propTypes = {
    percentage: propTypes.number
};

export default ProgressBar;
