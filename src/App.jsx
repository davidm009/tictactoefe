import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Board = () =>  {
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));    //This creates and initializes the board
  const [count, setCount] = useState(0);
  const [squareColors, setSquareColors] = useState(Array(9).fill('blue')); 
  

  const winningCombos = [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ];

 

  const checkWinner = (currentBoard) => {
    for (let combination of winningCombos) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        break;
      }

    }
  }
    
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCount(0);
    setSquareColors(Array(9).fill('blue'));
    setWinner(null);

  }


  function boxClicker(e) {
    if (winner) {
      return
    }
 
    console.log(e.target);
    const index = e.target.id; // Getting ID of clicked square
    const currentPlayer = count % 2 === 0 ? 'X' : 'O';

    const newColors = [...squareColors];
    newColors[index] = count % 2 === 0 ? 'blue' : 'red';
    setSquareColors(newColors);
    
    console.log(currentPlayer);

    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard);
     
      setCount(count+1);
      console.log(count)
    
    }
  }

  

  return (
    
    <div className='Board' onClick={boxClicker}>
      <h1>TicTacToe! Winner: {winner}</h1>
      <div className='row'>
        <div className="square" id="0"> <span style={{color:squareColors[0]}}>{board[0]}</span></div>
        <div className="square" id="1"><span style={{color:squareColors[1]}}>{board[1]}</span></div>
        <div className="square" id="2"><span style={{color:squareColors[2]}}>{board[2]}</span></div>
      </div>

      <div className='row'>
        <div className="square" id="3"><span style={{color: squareColors[3]}}>{board[3]}</span></div>
        <div className="square" id="4"><span style={{color: squareColors[4]}}>{board[4]}</span></div>
        <div className="square" id="5"><span style={{color: squareColors[5]}}>{board[5]}</span></div>
        
      </div>

      <div className='row'>
        <div className="square" id="6"><span style={{color: squareColors[6]}}>{board[6]}</span></div>
        <div className="square" id="7"><span style={{color: squareColors[7]}}>{board[7]}</span></div>
        <div className="square" id="8"><span style={{color: squareColors[8]}}>{board[8]}</span></div>
        
      </div>

      {winner != null && <button onClick={resetGame} className='button'>Reset Game</button>}

    </div>

  );

};

function App() {
  return (
    <>
    <Board ></Board>
    </>
  )
}

export default App
