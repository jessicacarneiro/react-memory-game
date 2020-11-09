import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import Cell from './Cell';

describe('<Cell />', () => {
    it('should render correct cell id', () => {
        const cell = render(<Cell id='31' activeCells={["21", "12", "00"]} />);

        expect(cell.queryByText('row-31')).toBeInTheDocument();
    });

    it('should render active cell', () => {
        const wrapper = mount(<Cell id='11' activeCells={["03", "11", "21"]} />);

        expect(wrapper.instance().active).toBe(true);
    });

    it('should render inactive cell', () => {
        const wrapper = mount(<Cell id='01' activeCells={["03", "11", "21"]} />);

        expect(wrapper.instance().active).toBe(false);
    });
})
