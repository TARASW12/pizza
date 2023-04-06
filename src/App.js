import React from "react";
import "./scss/app.css";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";

import { PizaWrapper } from "./context";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

const Root = () => {
  return (
    <PizaWrapper>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </PizaWrapper>
  );
};

export default App;
