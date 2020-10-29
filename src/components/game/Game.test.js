import React from 'react';
import { mount } from 'enzyme';

import Game from './Game';
import Footer from '../footer/Footer';
import Grid from '../grid/Grid';

jest.useFakeTimers();

describe('<Game />', () => {    
    it('should render Game', () => {
        const wrapper = mount(<Game rows={3} columns={2} />);

        expect(wrapper.exists()).toBe(true);
    });

    it('should render a Footer within Game', () => {
        const wrapper = mount(<Game rows={3} columns={4} />);

        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('should render a Grid within Game', () => {
        const wrapper = mount(<Game rows={3} columns={4} />);

        expect(wrapper.find(Grid)).toHaveLength(1);
    });

    it('setTimeout should be called', () => {
        mount(<Game rows={3} columns={4} />);
          
        expect(setTimeout).toBeCalled();
    });

    it('setTimeout should be called with 4s starting from state memorize', () => {
        mount(<Game rows={3} columns={4} gameState={'memorize'} />);
          
        expect(setTimeout).toBeCalled();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000);
    });
})