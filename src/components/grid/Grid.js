import React from 'react';

import './Grid.css';
import Cell from '../cell/Cell';

class Grid extends React.Component {
    rows() {
        return [...Array(this.props.rows).keys()];
    }

    columns() {
        return [...Array(this.props.columns).keys()];
    }

    renderGrid() {
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
            {this.renderGrid()}
        </div>
    }
}

export default Grid;