import React from 'react';

import propTypes from 'prop-types';

const progressBar = {
    width: '100%',
    height: '50px',
    boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.66)'
};

const ProgressBar = props => {
    let percentageLimit = props.percentageLimit(0, props.percentage, 100) + '%';
    const progressBarProgress = {
        width: percentageLimit,
        height: '100%',
        backgroundColor: props.percentage > 100 ? 'red' : '#3498db',
        marginTop: '10px',
        position: 'relative',
        transition: 'width 0.8s'
    };
    let textStyle = {
        position: 'absolute',
        marginTop: '-45px',
        left: '49%',
        fontSize: '25px'
    };
    return (
        <div className="progress-bar" style={progressBar}>
            <div
                className="progress-bar-progress"
                style={progressBarProgress}
            />
            <p style={textStyle}>{props.percentage}%</p>
        </div>
    );
};

ProgressBar.propTypes = {
    percentage: propTypes.number,
    percentageLimit: propTypes.func
};

export default ProgressBar;
