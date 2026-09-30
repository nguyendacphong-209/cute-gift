import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import App from "./App";
import { GiftProvider } from "./context/GiftContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <GiftProvider>
          <App />
        </GiftProvider>
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>,
);
