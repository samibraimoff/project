import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Suspense } from "react";
import { ThemeProvider } from "./theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="loading...">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
