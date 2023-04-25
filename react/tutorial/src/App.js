import React from 'react';

export default function Game() {
    const [currentMove, setCurrentMove] = React.useState(0);
    const [history, setHistory] = React.useState([Array(9).fill(null)]);
    const currentSquares = history[currentMove];
    const xNext = currentMove % 2 !== 0;

    const moves = history.map((squares, move) => {
        const description = move > 0 ? `Go to move ${move}` : 'Go to start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setCurrentMove(nextHistory.length - 1);
        setHistory(nextHistory);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    return (
        <>
            <Board squares={currentSquares} xNext={xNext} onPlay={handlePlay} />
            <div className="game-info">
                <ul>{moves}</ul>
            </div>
        </>
    );
}

function Board({ squares, xNext, onPlay }) {
    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xNext ? 'O' : 'X'}`;

    function calculateWinner(squares) {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
    }

    function handleClick(i) {
        const nextSquares = [...squares];
        if (calculateWinner(squares) || squares[i]) return;
        nextSquares[i] = xNext ? 'O' : 'X';
        onPlay(nextSquares);
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}
