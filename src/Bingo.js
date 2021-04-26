import { useState, useEffect } from "react";
import "./stylesheets/bingo.scss";
import { start } from "./Confetti";

var wonSeries = [[], [], [], []];

export default function Bingo() {
  const [state, setState] = useState({ checked: { 12: true } });
  const [bingoArray, setArray] = useState([
    { id: 0, value: "child noises in the background" },
    { id: 1, value: "Hello, hello?" },
    { id: 2, value: "I need to jump in another call" },
    { id: 3, value: "Can Everyone Go On Mute" },
    { id: 4, value: "Could you please get closer to the mic" },
    { id: 5, value: "Load Painful Echo/ Feedback" },
    { id: 6, value: "Next Slide Please" },
    { id: 7, value: "can we take this offline" },
    { id: 8, value: "is __ on call" },
    { id: 9, value: "Could You Share This Slide Afterwards" },
    { id: 10, value: "can somebody grant presenter rights" },
    { id: 11, value: "can you email that to everyone" },
    { id: 12, value: "Conf Call Bingo" },
    { id: 13, value: "Sorry I had problems logging in" },
    { id: 14, value: "animal noises in the background" },
    { id: 15, value: "sorry I didnt found the conference id" },
    { id: 16, value: "I was having connection issues" },
    { id: 17, value: "I will have to get back to you" },
    { id: 18, value: "who just joined?" },
    { id: 19, value: "I cannot hear anyone" },
    { id: 20, value: "do you see any screen" },
    { id: 21, value: "let us wait for other person" },
    { id: 22, value: "you will send the minutes" },
    { id: 23, value: "sorry I was on mute" },
    { id: 24, value: "can you repeat please" }
  ]);

  function Confetti() {
    useEffect(() => {
      start();
    });
    return <canvas id="canvas" />;
  }

  // var bingoArray = [
  //   { id: 0, value: "child noises in the background" },
  //   { id: 1, value: "Hello, hello?" },
  //   { id: 2, value: "I need to jump in another call" },
  //   { id: 3, value: "Can Everyone Go On Mute" },
  //   { id: 4, value: "Could you please get closer to the mic" },
  //   { id: 5, value: "Load Painful Echo/ Feedback" },
  //   { id: 6, value: "Next Slide Please" },
  //   { id: 7, value: "can we take this offline" },
  //   { id: 8, value: "is __ on call" },
  //   { id: 9, value: "Could You Share This Slide Afterwards" },
  //   { id: 10, value: "can somebody grant presenter rights" },
  //   { id: 11, value: "can you email that to everyone" },
  //   { id: 12, value: "Conf Call Bingo" },
  //   { id: 13, value: "Sorry I had problems logging in" },
  //   { id: 14, value: "animal noises in the background" },
  //   { id: 15, value: "sorry I didnt found the conference id" },
  //   { id: 16, value: "I was having connection issues" },
  //   { id: 17, value: "I will have to get back to you" },
  //   { id: 18, value: "who just joined?" },
  //   { id: 19, value: "I cannot hear anyone" },
  //   { id: 20, value: "do you see any screen" },
  //   { id: 21, value: "let us wait for other person" },
  //   { id: 22, value: "you will send the minutes" },
  //   { id: 23, value: "sorry I was on mute" },
  //   { id: 24, value: "can you repeat please" }
  // ];

  const isWon = (checked) => {
    const range = [0, 1, 2, 3, 4];
    var won = false;
    //Traversing Rows
    range.forEach((row) => {
      var arr = [];
      range.forEach((column) => {
        if (checked[row * 5 + column]) {
          arr.push(row * 5 + column);
        }
      });
      if (arr.length === 5) {
        arr.forEach((item) => {
          document.getElementById(`grid-${item}`).className = `grid-item ${
            item === 12 ? "grid-12" : ""
          } active won-item`;
        });
        won = true;
        let isPresent = false;
        wonSeries[0].forEach((item) => {
          if (JSON.stringify(item) === JSON.stringify(arr)) {
            isPresent = true;
          }
        });
        if (!isPresent) {
          wonSeries[0].push(arr);
        }
      }
    });
    //Traversing Columns
    range.forEach((column) => {
      var arr = [];
      range.forEach((row) => {
        if (checked[row * 5 + column]) {
          arr.push(row * 5 + column);
        }
      });
      if (arr.length === 5) {
        arr.forEach((item) => {
          document.getElementById(`grid-${item}`).className = `grid-item ${
            item === 12 ? "grid-12" : ""
          } active won-item`;
        });
        won = true;
        let isPresent = false;
        wonSeries[1].forEach((item) => {
          if (JSON.stringify(item) === JSON.stringify(arr)) {
            isPresent = true;
          }
        });
        if (!isPresent) {
          wonSeries[1].push(arr);
        }
      }
    });
    //Traversing Left Diagonal
    if (true) {
      let Diag = [];
      range.forEach((index) => {
        if (checked[index * 5 + index]) {
          Diag.push(index * 5 + index);
        }
        if (Diag.length === 5) {
          Diag.forEach((item) => {
            document.getElementById(`grid-${item}`).className = `grid-item ${
              item === 12 ? "grid-12" : ""
            } active won-item`;
          });
          won = true;
          let isPresent = false;
          wonSeries[2].forEach((item) => {
            if (JSON.stringify(item) === JSON.stringify(Diag)) {
              isPresent = true;
            }
          });
          if (!isPresent) {
            wonSeries[2].push(Diag);
          }
        }
      });
    }
    //Traversing Right Diagonal
    if (true) {
      let Diag = [];
      range.forEach((index) => {
        if (checked[index * 5 + 4 - index]) {
          Diag.push(index * 5 + 4 - index);
        }
        if (Diag.length === 5) {
          Diag.forEach((item) => {
            document.getElementById(`grid-${item}`).className = `grid-item ${
              item === 12 ? "grid-12" : ""
            } active won-item`;
          });
          won = true;
          let isPresent = false;
          wonSeries[3].forEach((item) => {
            if (JSON.stringify(item) === JSON.stringify(Diag)) {
              isPresent = true;
            }
          });
          if (!isPresent) {
            wonSeries[3].push(Diag);
          }
        }
      });
    }
    won && timerFunction();
    checkIfStillWon();
    return won;
  };

  const timerFunction = () => {
    let timer;
    clearInterval(timer);
    timer = setTimeout(() => {
      setState((state) => {
        const checked = { ...state.checked };
        const won = false;
        return {
          ...state,
          checked,
          won
        };
      });
    }, 5000);
  };

  const shuffleArray = () => {
    setArray(bingoArray.sort(() => Math.random() - 0.5));
    setState({ checked: { 12: true } });
    for (var i = 0; i < bingoArray.length; i++) {
      if (bingoArray[i].id === 12) {
        for (var j = 0; j < bingoArray.length; j++) {
          if (j === 12) {
            let temp = bingoArray[i];
            bingoArray[i] = bingoArray[j];
            bingoArray[j] = temp;
            break;
          }
        }
      }
    }
    for (var k = 0; k < bingoArray.length; k++) {
      bingoArray[k].id = k;
    }
    // setArray((bingoArray) => {

    //   return { bingoArray };
    // });
  };

  const handleOnclick = (id) => {
    if (id === 12) {
      shuffleArray();
    } else {
      setState((state) => {
        const checked = { ...state.checked, [id]: !state.checked[id] };
        const won = isWon(checked);
        return {
          ...state,
          checked,
          won
        };
      });
    }
  };

  const checkIfStillWon = () => {
    wonSeries.forEach((item) => {
      item.forEach((innerItem) => {
        innerItem.forEach((index) => {
          if (state.checked[index] === false) {
            innerItem.forEach((i) => {
              document.getElementById(`grid-${i}`).className = `grid-item ${
                i === 12 ? "grid-12" : ""
              } ${state.checked[i] ? "active" : ""}`;
            });
            innerItem.length = 0;
            return;
          }
        });
      });
    });
  };

  return (
    <>
      <div className="bingo-grid">
        {bingoArray.map((item) => {
          return (
            <div
              id={`grid-${item.id}`}
              key={item.id}
              onMouseDown={() => handleOnclick(item.id)}
              onMouseUp={() => isWon(state.checked)}
              className={`grid-item ${item.id === 12 ? "grid-12" : ""} ${
                !!state.checked[item.id] && item.id !== 12 ? "active" : ""
              }`}
            >
              <div className="grid-item-id">{item.id}</div>
              <div className="grid-item-value">
                {item.id === 12 ? (
                  <span role="img" aria-label="emoji">
                    &#128526;
                  </span>
                ) : undefined}
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
      {state.won ? <Confetti /> : null}
    </>
  );
}
