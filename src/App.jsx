import { useState } from "react";
import Layout from "./components/layout/Layout";
import Board from "./components/layout/Board";
import Again from "./components/ui/Again";
import Box from "./components/ui/Box";
import Overlay from "./components/ui/Overlay";
import ScoreBoard from "./components/ui/ScoreBoard";

export default function App() {
  const [state, setState] = useState({
    box: Array(9).fill(null),
    oIsNext: true,
  });
  const [newGame, setNewGame] = useState(false);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  function checkWinner(box) {
    let winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningStates.length; i++) {
      const [a, b, c] = winningStates[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        setWinner("Winner: " + box[a]);
        // document.getElementById(a).style.background = "#f1f1f1";
        // document.getElementById(b).style.background = "#f1f1f1";
        // document.getElementById(c).style.background = "#f1f1f1";
        // document.getElementById(a).style.color = "#222";
        // document.getElementById(b).style.color = "#222";
        // document.getElementById(c).style.color = "#222";
        setNewGame(false);
        let x = score.X + 1;
        let o = score.O + 1;
        if (box[a] == "X") {
          setScore((values) => ({ ...values, ["X"]: x }));
        } else {
          setScore((values) => ({ ...values, ["O"]: o }));
        }
        return box[a];
      }
    }
    let foundNull = false;
    for (let i = 0; i < box.length; i++) {
      if (box[i] == null) {
        foundNull = true;
      }
    }
    if (!foundNull) {
      setState({
        box: Array(9).fill(null),
        oIsNext: true,
      });
    }
    return null;
  }

  const playMove = (event) => {
    let id = event.target.id;
    let box = state.box.slice();
    if (checkWinner(box) || box[id]) {
      return;
    } else {
      box[id] = state.oIsNext ? "O" : "X";
      setState((values) => ({
        ...values,
        ["box"]: box,
        ["oIsNext"]: !state.oIsNext,
      }));
    }
    checkWinner(box);
  };

  const renderBox = (id) => {
    return <Box onClick={playMove} id={id} value={state.box[id]} />;
  };

  const startGame = () => {
    setNewGame(true);
    setState({
      box: Array(9).fill(null),
      oIsNext: true,
    });
  };

  return (
    <Layout>
      {!newGame && (
        <Overlay>
          <Again winner={winner} onClick={startGame} />
        </Overlay>
      )}
      <Board>
        <ScoreBoard>
          <div>O: {score.O}</div>
          <div>{state.oIsNext ? "O" : "X"}</div>
          <div>X: {score.X}</div>
        </ScoreBoard>
        {renderBox(0)}
        {renderBox(1)}
        {renderBox(2)}
        {renderBox(3)}
        {renderBox(4)}
        {renderBox(5)}
        {renderBox(6)}
        {renderBox(7)}
        {renderBox(8)}
      </Board>
    </Layout>
  );
}
