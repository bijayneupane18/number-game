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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70px",
          height: "70px",
        }}
      >
        {randomNumber}
      </h1>
      <label>Guess the number : </label>
      <input type="number" value={message} onChange={changeHandler}></input>
      <br></br>

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
