import React from 'react';

import Grid from '../grid/Grid';
class Game extends React.Component {

    render() {
        return <Grid rows={this.props.rows} columns={this.props.columns} />;
    }
}

export default Game;