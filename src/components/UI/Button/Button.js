import React from "react";

import "./Button.scss";
import propTypes from "prop-types";

const Button = (props) => {
    return (<button
        className="button-progressbar"
        value={props.value}
        onClick={(value) => props.handleClick(value)} >
        {props.text}
    </button>);
};

Button.propTypes = {
    text: propTypes.string.isRequired,
    value: propTypes.number.isRequired,
    handleClick: propTypes.func
};

export default Button;
