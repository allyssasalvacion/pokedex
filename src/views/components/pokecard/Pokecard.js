import React from "react";
import "./Pokecard.css";

function Pokecard({ imgSrc, name, types }) {
  return (
    <div className="pokecard">
      <img src={imgSrc} alt={name} />
      <h4>{name}</h4>
      <div className="pokecard__types">
        {types.map((type, id) => {
          return (
            <p key={id} className={`pokecard__type ${type.type.name}`}>
              {type.type.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Pokecard;
