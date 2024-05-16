import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./private";
import {
  routesAuthOnly,
  routesNoAuthOnly,
  routesPublic,
} from "./router-config";
import { Loading } from "../components/loading";
import { useAuth } from "../components/hooks/use-auth";

export function Router() {
  const { isAuth } = useAuth();

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routesPublic.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}

        <Route
          element={
            <ProtectedRoute redirectUrl="/" redirectCondition={!!isAuth} />
          }
        >
          {routesNoAuthOnly.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>

        <Route
          element={
            <ProtectedRoute redirectUrl="/login" redirectCondition={!isAuth} />
          }
        >
          {routesAuthOnly.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}
