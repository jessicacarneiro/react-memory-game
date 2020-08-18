import React from 'react';
import { render } from '@testing-library/react';

import Cell from './Cell';

describe('<Cell />', () => {
    it('should render correct cell id', () => {
        const cell = render(<Cell id='31'/>);
        expect(cell.queryByText('row-31')).toBeInTheDocument();
    });
})