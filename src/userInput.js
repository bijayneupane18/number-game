import React, { useState } from "react";

const UserInput = () => {
  const [message, setMessage] = useState("");
  // const [check, setCheck] = useState(false);

  const randomNumber = () => {
    return Math.floor(Math.random() * 5);
  };

  const changeHandler = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const compare = () => {
    if (randomNumber() == message) {
      console.log("Winner");
    } else {
      console.log("Looser");
    }
  };

  return (
    <div>
      <h1>{randomNumber()}</h1>
      <label>Guess the number : </label>
      <input type="number" value={message} onChange={changeHandler}></input>
      <button onClick={compare}>Submit</button>
      {/* {check ? compare() : ""} */}
    </div>
  );
};

export default UserInput;
