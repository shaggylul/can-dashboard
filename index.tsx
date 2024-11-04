import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./src/app/ui/root";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
