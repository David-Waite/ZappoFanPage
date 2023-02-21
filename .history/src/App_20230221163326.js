import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";
import Content from "./components/Content";

export default function App() {
  return (
    <div>
      <img
        className="background"
        src={require("./images/synthwave-wallpaper.jpg")}
        alt="background"
      />
      <Hero />
    </div>
  );
}
