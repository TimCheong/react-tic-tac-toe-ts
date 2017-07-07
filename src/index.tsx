import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

interface SquareProps {
    value: string,
    onClick: () => void
}
interface SquareState {
}

class Square extends React.Component<SquareProps, SquareState> {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

interface BoardState {
    squares: string[],
}

class Board extends React.Component<{}, BoardState> {
    constructor() {
        super();
        const sqrs = Array<string>(9);
        sqrs.forEach((_, i, array) => array[i] = null);
        this.state = {
            squares: sqrs
        }
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        squares[i] = "X";
        this.setState({ squares: squares });
    }

    renderSquare(i: number) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
