import React from 'react';
import { mount } from 'enzyme';

import Game from './Game';

describe('<Game />', () => {
    it('should render Game', () => {
        const wrapper = mount(<Game rows={3} columns={2} />);

        expect(wrapper.exists()).toBe(true);
    });
})