import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import "./i18n";

try {
  localStorage.setItem("chakra-ui-color-mode", "dark");
} catch {
  // Storage can be blocked. The theme still starts in dark.
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="dark" />
    <App />
  </React.StrictMode>
);
