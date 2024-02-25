import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config";

export function AppRouter() {
  return (
    <div className="page-wrapper">
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}
