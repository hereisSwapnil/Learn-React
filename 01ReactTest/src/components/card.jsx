import React, { Component } from "react";

function Card() {
  return (
    <>
      <p className="text-3xl font-semibold">Card Component</p>
      <progress value={0.3} />
      <input />
      <select>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
      </select>
      <textarea />
    </>
  );
}

export default Card;
