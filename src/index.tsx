import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";
import { Suspense } from "react";
import { ThemeProvider } from "app/providers/theme";

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
