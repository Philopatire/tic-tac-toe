import AppTitle from "./components/AppTitle";
import ScoresContainer from "./components/ScoresContainer";
import PlayerStatus from "./components/PlayerStatus";
import Board from "./components/Board";
import Controlers from "./components/Controlers";
import React, { useCallback, useState } from "react";

function check(board) {
  // Row
  for (let i = 0; i < 9; i += 3) {
    if (board[i]) {
      if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i + 1] === board[i + 2]) {
        return board[i];
      }
    }
  }

  // Column
  for (let i = 0; i < 3; i++) {
    if (board[i]) {
      if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i + 3] === board[i + 6]) {
        return board[i];
      }
    }
  }

  // Diagonal 1
  if (board[0] && board[4] && board[8]) {
    if (board[0] === board[4] && board[0] === board[8] && board[4] === board[8]) {
      return board[0];
    }
  }

  // Diagonal 2
  if (board[2] && board[4] && board[6]) {
    if (board[2] === board[4] && board[2] === board[6] && board[4] === board[6]) {
      return board[2];
    }
  }
  return false;
}

function App() {
  const [p1Data, setP1Data] = useState({ name: "Philo", score: 0 });
  const [p2Data, setP2Data] = useState({ name: "Mina", score: 0 });
  const [gameBoard, setGameBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("Philo");
  const [winner, setWinner] = useState("");

  const handleP1Change = useCallback(
    (newName, newScore) => {
      let name = newName ? newName : p1Data.name;
      let score = newScore ? newScore : p1Data.score;
      setP1Data({ name: name, score: score });
    },
    [p1Data]
  );
  const handleP2Change = useCallback(
    (newName, newScore) => {
      setP2Data({
        name: newName ? newName : p2Data.name,
        score: newScore ? newScore : p2Data.score,
      });
    },
    [p2Data]
  );
  const handleResetGame = useCallback(() => {
    setGameBoard(Array(9).fill(""));
    setCurrentPlayer(p1Data.name);
    setWinner("");
  }, [p1Data.name]);
  const handleResetScore = useCallback(() => {
    setP1Data({
      name: p1Data.name,
      score: 0,
    });
    setP2Data({
      name: p2Data.name,
      score: 0,
    });
  }, [p1Data, p2Data]);
  const handleCurrentChange = (index) => {
    let nextPlayer = currentPlayer === p1Data.name ? p2Data.name : p1Data.name;

    let gameBoardCopy = [...gameBoard];
    gameBoardCopy[index] = currentPlayer === p1Data.name ? "X" : "O";

    setCurrentPlayer(nextPlayer);
    setGameBoard(gameBoardCopy);

    let winCheck = check(gameBoardCopy);
    if (winCheck) {
      handleResetGame();
      let winnerName;
      if (winCheck === "X") {
        winnerName = p1Data.name;
        handleP1Change(null, p1Data.score + 1);
      } else {
        winnerName = p2Data.name;
        handleP2Change(null, p2Data.score + 1);
      }
      setWinner(winnerName);
    } else {
      setWinner("");
    }
  };

  return (
    <div className="App">
      <AppTitle content="Tic Tac Toe" />
      <ScoresContainer
        p1Name={p1Data.name}
        p2Name={p2Data.name}
        p1Score={p1Data.score}
        p2Score={p2Data.score}
        handleP1Change={handleP1Change}
        handleP2Change={handleP2Change}
      />
      <PlayerStatus current={currentPlayer} winner={winner} />
      <Board board={gameBoard} handle={handleCurrentChange} />
      <Controlers handleResetGame={handleResetGame} handleResetScore={handleResetScore} />
    </div>
  );
}
export default App;
