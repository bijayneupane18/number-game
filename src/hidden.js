import React from "react";

const hidden = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 5);
  };
  //   console.log(Math.floor(Math.random() * 5));
  return (
    <>
      <h1>{randomNumber()}</h1>
    </>
  );
};

export default hidden;
