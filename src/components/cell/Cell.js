import React from 'react';
import './Cell.css';

class Cell extends React.Component {
    render() {
        return <div className="cell">
            <span className="cellId">{`row-${this.props.id}`}</span>
        </div>;
    }
}

export default Cell;