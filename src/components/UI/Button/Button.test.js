import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from "./Button";

configure({ adapter: new Adapter() });

describe('Button test', () => {
    it('should be defined', () => {
        expect(Button).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <Button text="-10" value={-10}/>
        );
        expect(tree).toMatchSnapshot();
    });
});
