import React from 'react';
import './Cell.css';

class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.id = props.id;
        this.active = props.active;
    }

    isCellActive() {
        return this.active && this.props.gameState === "memorize";
    }

    render() {
        let className = "cell";
        className += this.isCellActive() ? "-active" : "";

        return <div className={className}>
            <span className="cellId">
                    {`row-${this.id}`}
            </span>
        </div>;
    }
}

export default Cell;