import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config";

export function AppRouter() {
  return (
    <Fragment>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Fragment>
  );
}
