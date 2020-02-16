import React from "react";
import axios from "axios";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import DropDownMenu from "../../components/UI/DropDown/DropDownMenu";
import Button from "../../components/UI/Button/Button";
import LoadingSpinner from "../../components/UI/Spinner/Spinner";
import './progressbars.scss';

class ProgressBars extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            bars: [],
            buttons: [],
            limit: 0,
            loading: true,
            selectedBar: 0,
            error: ""
        };
    }
    componentDidMount () {
        let { bars, buttons, limit, loading } = this.state;
        let data;
        axios.get('http://pb-api.herokuapp.com/bars')
            .then(res => {
                data = res.data;
                if (data && data.bars && data.buttons) {
                    bars = data.bars;
                    buttons = data.buttons;
                    limit = data.limit ? data.limit : 100;
                    loading = false;
                    this.setState({ bars, buttons, limit, loading });
                }
            })
            .catch(error => this.setState({ error }));
    }

    handleDropDownChange = (value) => {
        this.setState({ selectedBar: value });
    }
    handleButtonClick = (event) => {
        let { bars, selectedBar } = this.state;
        let value = event.target.value;
        bars[selectedBar] = parseInt(bars[selectedBar], 10) + parseInt(value, 10);
        this.setState({ bars });
    }
    percentageLimit = (min, value, max) => {
        // currently using 100 as maximum default limit
        return Math.min(Math.max(min, value), max);
    }
    render () {
        console.log('bars', this.state.bars, "limit=> ", this.state.limit);
        let { bars, buttons, loading } = this.state;
        let progressBarsJSX = "";
        let buttonsJSX = "";
        // eslint-disable-next-line max-len
        if (bars && bars.length > 0) { progressBarsJSX = <ul>{bars.map((bar, index) => <ProgressBar key={index} percentageShow = {this.calculatePercentage(bar)} percentage = {this.percentageLimit(0, bar, 100)} />)}</ul>; }
        // eslint-disable-next-line max-len
        if (buttons && buttons.length > 0) { buttonsJSX = <ul>{buttons.map((button, index) => <Button key={index} handleClick={this.handleButtonClick.bind(this)} text={button.toString()} value = {button} />)} </ul>; }
        return (
            <div id="app-container">
                <div id="app-header"/>
                <div id="app-body">
                    <div id="progress-bars-header"> Progress Bars Demo </div>
                    <div id="progress-bars-container">
                        {loading ? <LoadingSpinner /> : progressBarsJSX }
                    </div>
                    <div id="bar-controllers">
                        <div id="dropdownlist">
                            {/* eslint-disable-next-line max-len */}
                            {(bars && bars.length > 0) && <DropDownMenu optionsList={bars} handleChange={this.handleDropDownChange.bind(this)}/>}
                        </div>
                        <div id="buttons-container">
                            {loading ? <div/> : buttonsJSX}
                        </div>
                    </div>
                </div>
                <div id="app-footer"/>
            </div>
        );
    }
}

export default ProgressBars;
