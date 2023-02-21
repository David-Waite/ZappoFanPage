import React from "react";
import FlavourText from "./FlavourText";

export default function MainText(props) {
  return (
    <div className="mainText">
      <div>
        <h1>Zappos</h1>
        <h2>Relax this summer and chew on a refeshing zappo</h2>
      </div>

      <FlavourText currentZappo={props.currentZappo} />
    </div>
  );
}
