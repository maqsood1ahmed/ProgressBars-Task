import React from "react";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import './progressbars.scss';

class ProgressBars extends React.Component {
    render () {
        return (
            <div className="app-container">
                <div>Header</div>
                <div>
                    <ul>
                        <ProgressBar key={1} percentage = {10} />
                        <ProgressBar key={2} percentage = {40} />
                        <ProgressBar key={3} percentage = {70} />
                    </ul>
                </div>
                <div>Buttons</div>
            </div>
        );
    }
}

export default ProgressBars;
