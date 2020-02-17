import React from 'react';
import { Select } from 'antd';

import propTypes from 'prop-types';

const DropDownMenu = props => {
    let { optionsList } = props;
    let DropDownOptionsJSX = optionsList.map((option, index) => {
        return (
            <Select.Option key={index} value={index}>
                {' '}
                #progress{index + 1}
            </Select.Option>
        );
    });
    return (
        <Select
            defaultValue={0}
            style={{ width: 120 }}
            onChange={e => props.handleChange(e)}
        >
            {DropDownOptionsJSX}
        </Select>
    );
};

DropDownMenu.propTypes = {
    optionsList: propTypes.array,
    handleChange: propTypes.func
};

DropDownMenu.defaultProps = {
    optionsList: []
};

export default DropDownMenu;
