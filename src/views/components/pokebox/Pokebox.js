import React from "react";

function Pokebox({ imgSrc, name, types }) {
  return (
    <div className="pokebox">
      <img src={imgSrc} alt="pokemon" />
      <h4>{name}</h4>
      {types.map((type) => {
        <div className="pokebox__type">{type}</div>;
      })}
    </div>
  );
}

export default Pokebox;
