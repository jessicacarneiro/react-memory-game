import React from 'react';

import _ from 'lodash';

import './Grid.css';
import Cell from '../cell/Cell';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.matrix = this.generateGrid();

        let flatMatrix = _.flatMapDeep(this.matrix, (row) => _.flatten(row.props.children));

        this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);
    }

    rows() {
        return [...Array(this.props.rows).keys()];
    }

    columns() {
        return [...Array(this.props.columns).keys()];
    }

    generateGrid() {
        return this.rows().map((r) => ( 
            <div key={`${r}`} id={`row-${r}`}>
                {this.columns().map((c) => (
                    <Cell key={c} id={`${r}${c}`} />
                ))}
            </div>
        ));
    }

    render() {
        return <div id="grid">
            {this.matrix}
        </div>
    }
}

export default Grid;