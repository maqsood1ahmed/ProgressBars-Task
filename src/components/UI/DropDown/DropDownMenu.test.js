import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DropDownMenu from './DropDownMenu';

configure({ adapter: new Adapter() });

describe('DropDownMenu test', () => {
    it('should be defined', () => {
        expect(DropDownMenu).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<DropDownMenu optionsList={[0, 1, 2]} />);
        expect(tree).toMatchSnapshot();
    });
});
