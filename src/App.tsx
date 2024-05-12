import { memo } from "react";
import { Header } from "./components/Header/Header";
import { Router } from "./router/Router";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import "./firebase";
import "./App.css";

export const App = memo(() => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <main className="container mx-auto px-4 flex-1 flex flex-col">
          <Router />
        </main>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
});
