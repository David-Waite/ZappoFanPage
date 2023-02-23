import Hero from "./components/Hero";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "LearnBestCoding Page title";
  }, []);
  return (
    <div className="rootContainer">
      <img
        className="background"
        src={require("./assets/images/synthwave-wallpaper.jpg")}
        alt="background"
      />
      <Hero />
    </div>
  );
}
