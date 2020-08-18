import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import Cell from '../cell/Cell';
import Grid from './Grid';

describe('<Grid />', () => {
    it('should render correct number of cells', () => {
        const wrapper = mount(<Grid rows={3} columns={4} />);

        expect(wrapper.find(Cell)).toHaveLength(12);
    });

    it('should add the correct ids to the cells', () => {
        const grid = render(<Grid rows={2} columns={3} />);

        expect(grid.queryByText('row-00')).toBeInTheDocument();
        expect(grid.queryByText('row-01')).toBeInTheDocument();
        expect(grid.queryByText('row-02')).toBeInTheDocument();
        expect(grid.queryByText('row-10')).toBeInTheDocument();
        expect(grid.queryByText('row-11')).toBeInTheDocument();
        expect(grid.queryByText('row-12')).toBeInTheDocument();
    })
})