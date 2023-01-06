import React, { useState } from "react";

const UserInput = () => {
  const [message, setMessage] = useState(null);

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <label>Guess the number : </label>
      <input type="number" value={message} onChange={changeHandler}></input>
    </div>
  );
};

export default UserInput;
