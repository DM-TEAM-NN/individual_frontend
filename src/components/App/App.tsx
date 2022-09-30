import React, { useMemo } from "react";

import routes from "@lib/routes";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const pages = useMemo(() => {
    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}></Route>
    ));
  }, []);

  return (
    <BrowserRouter>
      <Routes>{pages}</Routes>
    </BrowserRouter>
  );
}

export default App;
