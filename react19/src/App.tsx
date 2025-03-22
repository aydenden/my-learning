import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import "./App.css";

type Square = {
  value: string | null;
  player: string | null;
};
type SquaresHistoryContext = {
  allHistory: Square[];
  boardHistory: Square[];
  addHistory: (index: number) => void;
  getNextValue: () => string;
  moveHistory: (move: number) => void;
};
const SquaresHistoryContext = createContext<SquaresHistoryContext>({
  allHistory: [],
  boardHistory: [],
  addHistory: () => {},
  getNextValue: () => "",
  moveHistory: () => {},
});

const SquaresHistoryContextProvider = ({ children }: PropsWithChildren) => {
  const [history, setHistory] = useState<Array<Square[]>>([
    Array(9)
      .fill(null)
      .map(() => ({ value: null, player: null })),
  ]);
  const [movePointer, setMovePointer] = useState(0);

  const getNextValue = () => {
    return movePointer % 2 === 0 ? "X" : "O";
  };

  const addHistory = (index: number) => {
    if (
      history[movePointer][index].value ||
      calculateWinner(history[movePointer])
    ) {
      return;
    }

    setHistory((prevHistory) => {
      const nextHistory = prevHistory.slice();
      const currentHistory = (nextHistory[movePointer + 1] =
        nextHistory[movePointer].slice());
      currentHistory[index] = {
        value: getNextValue(),
        player: getNextValue(),
      };

      return nextHistory;
    });
    setMovePointer(movePointer + 1);
  };

  const moveHistory = (move: number) => {
    setMovePointer(move);
  };

  const boardHistory = useMemo(() => {
    return history[movePointer].slice();
  }, [history, movePointer]);

  const allHistory = useMemo(() => {
    return history[movePointer].filter(({ value }) => value !== null);
  }, [history, movePointer]);

  return (
    <SquaresHistoryContext.Provider
      value={{
        addHistory,
        moveHistory,
        boardHistory,
        allHistory: allHistory,
        getNextValue,
      }}
    >
      {children}
    </SquaresHistoryContext.Provider>
  );
};

const useSquaresHistoryContext = () => {
  return useContext(SquaresHistoryContext);
};

function Square({
  value,
  addHistory,
}: {
  value: Square;
  addHistory: () => void;
}) {
  const renderValue = value?.value || "";
  return (
    <button className="square" onClick={addHistory}>
      {renderValue}
    </button>
  );
}

function Board() {
  const { addHistory, boardHistory, getNextValue } = useSquaresHistoryContext();

  const threeArray = Array(3).fill(null);

  const status = useMemo(() => {
    const winner = calculateWinner(boardHistory);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + getNextValue();
    }
    return status;
  }, [boardHistory, getNextValue]);

  const handleClick = (index: number) => {
    addHistory(index);
  };

  return (
    <>
      <div className="status">{status}</div>

      {threeArray.map((_, rowIndex) => {
        return (
          <div className="board-row">
            {threeArray.map((_, colIndex) => {
              const historyIndex = rowIndex * 3 + colIndex;

              return (
                <Square
                  value={boardHistory[historyIndex]}
                  addHistory={() => handleClick(historyIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}

const GameHistory = () => {
  const { allHistory, moveHistory } = useSquaresHistoryContext();

  const getMoveDescription = (move: number) => {
    if (move > 0) {
      return "Go to move #" + move;
    } else {
      return "Go to game start";
    }
  };

  return (
    <div className="game-info">
      <ol>
        {allHistory.map((squares, move) => {
          const description = getMoveDescription(move);
          return (
            <li key={move}>
              <button onClick={() => moveHistory(move)}>
                {description} - {squares.player}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

function App() {
  return (
    <SquaresHistoryContextProvider>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <GameHistory />
      </div>
    </SquaresHistoryContextProvider>
  );
}

export default App;
function calculateWinner(squares: Square[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a].value &&
      squares[a].value === squares[b].value &&
      squares[a].value === squares[c].value
    ) {
      return squares[a].value;
    }
  }
  return null;
}
