// styles
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// components
import App from "./app";
// contexts
import { SearchProvider } from "./contexts/search-provider";
import { ThemeProvider } from "./contexts/theme-provider";
// states
import store from "./states/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <SearchProvider>
        <BrowserRouter>
          <StrictMode>
            <App />
          </StrictMode>
        </BrowserRouter>
      </SearchProvider>
    </ThemeProvider>
  </Provider>,
);