import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProgressBar from './ProgressBar';

configure({ adapter: new Adapter() });

describe('ProgressBar test', () => {
    it('should be defined', () => {
        expect(ProgressBar).toBeDefined();
    });
    it('should render correctly', () => {
        const baseProps = {
            percentage: 40,
            percentageLimit: jest.fn()
        };
        const tree = shallow(<ProgressBar {...baseProps} />);
        expect(tree).toMatchSnapshot();
    });
});
