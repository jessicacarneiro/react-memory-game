import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('<App />', () => {
    it('should render App', () => {
        const wrapper = mount(<App />);

        expect(wrapper.exists()).toBe(true);
    });
})