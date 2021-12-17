import React from "react";
// import HomePage from "./pages/HomePage/home";
import { MainLayout } from "./layout/MainLayout";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage/home";
import Category from "./pages/Category/Category";

function App() {
  return (
    // <>
    //   {" "}
    //   <Category />
    // <HomePage />
    // </>

    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
