import { memo } from "react";
import { Header } from "./components/header/header";
import { Router } from "./router/router";
import { Footer } from "./components/footer/footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./components/theme/theme-provider";

import "./firebase";
import "./App.css";

export const App = memo(() => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Header />
          <main className="container mx-auto px-4 flex-1 flex flex-col">
            <Router />
          </main>
          <Footer />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
});
