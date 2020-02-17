import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoadingSpinner from './Spinner';

configure({ adapter: new Adapter() });

describe('Loading Spinner test', () => {
    it('should be defined', () => {
        expect(LoadingSpinner).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<LoadingSpinner />);
        expect(tree).toMatchSnapshot();
    });
});
