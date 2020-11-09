import React from 'react';

import _ from 'lodash';

import './Grid.css';
import Cell from '../cell/Cell';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.matrix = this.generateMatrix();

        let flatMatrix = _.flatMap(this.matrix);
        this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);

        this.grid = this.generateGrid();
    }

    rows() {
        return [...Array(this.props.rows).keys()];
    }

    columns() {
        return [...Array(this.props.columns).keys()];
    }

    generateMatrix() {
        let matrix = [];

        for (let r = 0; r < this.props.rows; r++) {
            let row = [];
            for (let c = 0; c < this.props.columns; c++) {
                row.push(`${r}${c}`);
            }
            matrix.push(row);
        }

        return matrix;
    }

    generateGrid() {
        return this.rows().map((r) => ( 
            <div key={`${r}`} id={`row-${r}`}>
                {this.columns().map((c) => (
                    <Cell key={c} id={`${r}${c}`} activeCells={this.activeCells} />
                ))}
            </div>
        ));
    }

    render() {
        return <div id="grid">
            {this.grid}
        </div>
    }
}

export default Grid;