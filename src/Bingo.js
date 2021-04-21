import { useState } from "react";
import "./stylesheets/bingo.scss";

export default function Bingo() {
  const [state, setState] = useState({ checked: { 12: true } });

  var bingoArray = [
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
    { id: 12, value: "Conf Call Bingo?" },
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
  ];

  const isWon = (checked) => {
    const range = [0, 1, 2, 3, 4];
    return (
      undefined !==
        range.find((row) =>
          range.every((column) => checked[row * 5 + column])
        ) ||
      undefined !==
        range.find((column) =>
          range.every((row) => checked[row * 5 + column])
        ) ||
      range.every((index) => checked[index * 5 + index]) ||
      range.every((index) => checked[index * 5 + 4 - index])
    );
  };

  const handleOnclick = (id) => {
    setState((state) => {
      const checked = { ...state.checked, [id]: !state.checked[id] };
      const won = isWon(checked);
      return {
        ...state,
        checked,
        won
      };
    });
  };

  return (
    <>
      <div className="bingo-grid">
        {bingoArray.map((item) => {
          return (
            <div
              id={`grid ${item.id}`}
              key={item.id}
              onClick={() => handleOnclick(item.id)}
              className={`grid-item ${item.id === 12 ? "grid-12" : undefined} ${
                !!state.checked[item.id] && item.id !== 12 ? "active" : ""
              }`}
            >
              <div className="grid-item-id">{item.id}</div>
              <div className="grid-item-value">{item.value}</div>
            </div>
          );
        })}
      </div>
      {state.won ? "You Won" : null}
    </>
  );
}
