import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import Cell from './Cell';

describe('<Cell />', () => {
    it('should render correct cell id', () => {
        const cell = render(<Cell id='31' active={false} />);

        expect(cell.queryByText('row-31')).toBeInTheDocument();
    });

    it('should render active cell if cell is selected and state is memorize', () => {
        const wrapper = mount(<Cell id='11' active={true} gameState={'memorize'}/>);

        expect(wrapper.instance().active).toBe(true);
        expect(wrapper.exists('.cell-active')).toBe(true);
    });

    it('should render inactive cell if cell is selected but state is not memorize', () => {
        const wrapper = mount(<Cell id='31' active={true} gameState={'recall'} />);

        expect(wrapper.instance().active).toBe(true);
        expect(wrapper.exists('.cell-active')).toBe(false);
    });

    it('should render inactive cell if state is memorize but cell is not selected', () => {
        const wrapper = mount(<Cell id='31' active={false} gameState={'memorize'} />);

        expect(wrapper.instance().active).toBe(false);
        expect(wrapper.exists('.cell-active')).toBe(false);
    });
})
