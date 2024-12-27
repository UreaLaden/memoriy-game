import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./global.styles.tsx";
import ContextProvider from "./store/context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
