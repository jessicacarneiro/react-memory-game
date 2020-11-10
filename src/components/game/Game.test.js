import React from 'react';

import { mount } from 'enzyme';
import { render } from '@testing-library/react';

import Game from './Game';
import Footer from '../footer/Footer';
import Cell from '../cell/Cell';

jest.useFakeTimers();

describe('<Game />', () => {    
    it('should render Game', () => {
        const wrapper = mount(<Game rows={3} columns={2} />);

        expect(wrapper.exists()).toBe(true);
    });

    it('should render correct number of cells', () => {
        const wrapper = mount(<Game rows={3} columns={4} />);

        expect(wrapper.find(Cell)).toHaveLength(12);
    });

    it('should add the correct ids to the cells', () => {
        const grid = render(<Game rows={2} columns={3} />);

        expect(grid.queryByText('row-00')).toBeInTheDocument();
        expect(grid.queryByText('row-01')).toBeInTheDocument();
        expect(grid.queryByText('row-02')).toBeInTheDocument();
        expect(grid.queryByText('row-10')).toBeInTheDocument();
        expect(grid.queryByText('row-11')).toBeInTheDocument();
        expect(grid.queryByText('row-12')).toBeInTheDocument();
    });

    it('should render a Footer within Game', () => {
        const wrapper = mount(<Game rows={3} columns={4} />);

        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('should store active cells', () => {
        const wrapper = mount(<Game rows={3} columns={4} activeCellsCount={2} />);

        expect(wrapper.instance().activeCells).toHaveLength(2);
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