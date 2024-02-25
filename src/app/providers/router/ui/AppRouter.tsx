import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config";

export function AppRouter() {
  return (
    <Fragment>
      <Link to="/about">About</Link>
      <Link to="/">Main</Link>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Fragment>
  );
}
