import React from "react";

import "./Spinner.scss";

const LoadingSpinner = () => {
    return (
        <div className="spinner">
            <span className="spinner-inner-1" />
            <span className="spinner-inner-2" />
            <span className="spinner-inner-3" />
        </div>
    );
};

export default LoadingSpinner;
