import React from 'react';
import './Cell.css';

class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.id = props.id;
        this.active = this.isCellActive(this.id, this.props.activeCells);
    }

    isCellActive(cellId, activeCells) {
        return activeCells.includes(cellId);
    }

    render() {
        return <div className="cell">
            <span className="cellId">
                    {`row-${this.id}`}
            </span>
        </div>;
    }
}

export default Cell;