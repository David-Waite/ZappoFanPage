import "./styles.css";

import ReactDOM from "react-dom/client";
import App from "./App";
componentDidMount() {
    document.title = "About Page"; 
 }
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
