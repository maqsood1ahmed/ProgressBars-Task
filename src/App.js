import React from 'react';
import 'antd/dist/antd.css';

import ProgressBars from './containers/ProgressBars/ProgressBars';
import propTypes from 'prop-types';
import './App.scss';

class App extends React.Component {
    render () {
        return <ProgressBars />;
    }
}

App.propTypes = {
    children: propTypes.element
};

export default App;
