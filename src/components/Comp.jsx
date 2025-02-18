import React from "react";

const Comp = ({ 
    name, 
    text, 
    onClick 
}) => {
  return (
    <div>
      <h1>Привіт, {name}!</h1>
      <p>{text}</p>
      <button onClick={onClick}>Натисни мене</button>
    </div>
  );
};

export default Comp;