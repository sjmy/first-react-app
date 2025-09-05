import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./BGColour.jsx";
import Greeting from "./Greeting.jsx";
import { FavouriteFood } from "./FavouriteFood.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Greeting /> */}
    <App />
  </StrictMode>
);
