import React from 'react';

import _ from 'lodash';

import './Game.css';

import Cell from '../cell/Cell';
import Footer from '../footer/Footer';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gameState: 'ready' }; 

        this.matrix = this.generateMatrix();
        let flatMatrix = _.flatMap(this.matrix);
        this.activeCells = 
            _.sampleSize(flatMatrix, this.props.activeCellsCount);
        this.grid = this.generateGrid();
    }

    componentDidMount() { 
        setTimeout(() => this.setState({ gameState: 'memorize' }), 2000);
        setTimeout(() => this.setState({ gameState: 'recall' }), 4000);
    }

    rows() {
        return [...Array(this.props.rows).keys()];
    }

    columns() {
        return [...Array(this.props.columns).keys()];
    }

    isCellActive(cellId) {
        return this.activeCells.includes(cellId);
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
                    <Cell
                        key={c} 
                        id={`${r}${c}`} 
                        active={this.isCellActive(`${r}${c}`)}
                        gameState={this.state.gameState}
                    />
                ))}
            </div>
        ));
    }

    render() {
        return (
            <div id="game">
                <div id="grid">{this.generateGrid()}</div>
                <Footer {...this.state} />
            </div>
        );
    }
}

export default Game;