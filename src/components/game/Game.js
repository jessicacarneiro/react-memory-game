import React from 'react';

import Grid from '../grid/Grid';
import Footer from '../footer/Footer';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gameState: 'ready' }; 
    }

    componentDidMount() { 
        setTimeout(() => this.setState({ gameState: 'memorize' }), 2000);
        setTimeout(() => this.setState({ gameState: 'recall' }), 4000);
    }

    render() {
        return (
            <div>
                <Grid rows={this.props.rows} columns={this.props.columns} activeCellsCount={this.props.activeCellsCount} />
                <Footer {...this.state} />
            </div>
        );
    }
}

export default Game;