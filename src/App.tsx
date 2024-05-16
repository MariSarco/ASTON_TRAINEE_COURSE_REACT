import { memo } from "react";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorLayout } from "./components/helpers/error-layout";
import { Wrapper } from "./components/helpers/wrapper";
import { useAuth } from "./components/hooks/use-auth";
import { useGetFilmsQuery } from "./store/slices/films/films-slice";
import "./firebase";
import "./App.css";

function App() {
  useGetFilmsQuery(5);
  const { isLoading } = useAuth();

  return (
    <Wrapper isLoading={isLoading}>
      <Router />
    </Wrapper>
  );
}

export const WrappedApp = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorLayout}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
});
