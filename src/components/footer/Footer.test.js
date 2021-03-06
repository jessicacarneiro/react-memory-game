import React from 'react';
import { mount } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
    it('should render Footer', () => {
        const wrapper = mount(<Footer gameState={'ready'}/>);

        expect(wrapper.exists()).toBe(true);
    });

    it('should render Footer with default hints props', () => {
        const wrapper = mount(<Footer gameState={'ready'}/>);

        expect(wrapper.instance().props.hints).toBeDefined();
    });

    it('should render with message "Memorize..." when state memorize is passed', () => {
        const wrapper = mount(<Footer gameState={'memorize'}/>);

        expect(wrapper.find('.hint').text()).toBe('Memorize...');
    });
})