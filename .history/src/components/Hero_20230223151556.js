import { useState } from "react";
import MainText from "./MainText";
import data from "../data";
import Zappo from "./Zappo";

export default function Hero() {
  const [currentZappo, setCurrentZappo] = useState({
    id: "5",
    name: "Grape",
    description:
      "We all know this is the best, there’s a reason it’s the most sold and the default",
  });

  function displayText(id) {
    setCurrentZappo({
      id: id,
      name: data[id].name,
      description: data[id].description,
      color: data[id].color,
    });
  }

  const zappoElements = data.map((data) => (
    <Zappo
      key={data.id}
      image={data.url}
      name={data.name}
      displayText={() => displayText(data.id)}
    />
  ));
  return (
    <div className="hero">
      <div className="zappoContainer"> {zappoElements}</div>
      <MainText currentZappo={currentZappo} />
    </div>
  );
}
