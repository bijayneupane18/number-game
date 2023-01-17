import React, { useState } from "react";

let randomNumber = Math.floor(Math.random() * 5);

const UserInput = () => {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(false);

  const changeHandler = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const compare = () => {
    if (randomNumber == message) {
      console.log("Winner");
      return "Winner";
    } else {
      console.log("loser");
      return "Loser";
    }
  };

  return (
    <div>
      <h1>{randomNumber}</h1>
      <label>Guess the number : </label>
      <input type="number" value={message} onChange={changeHandler}></input>

      <button
        onClick={() => {
          setResult(true);
        }}
        onBlur={() => {
          setResult(false);
        }}
      >
        Submit
      </button>

      <h2>{result ? compare() : ""}</h2>
    </div>
  );
};

export default UserInput;
