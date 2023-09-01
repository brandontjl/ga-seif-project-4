import { GlobalStyle } from "./styles/GlobalStyle";
import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Register from "./components/UserRegister";
import Login from "./components/UserLogin";
import { CookiesProvider } from "react-cookie";
import AuthProvider from "./components/auth/AuthProvider";
import GuestOnly from "./components/auth/GuestOnly";
import AuthOnly from "./components/auth/AuthOnly";
import { GlobalProvider } from "./context/globalContext";
import App from "./App";
// import Project from "./components/Projects";
import Portfolio from "./components/Portfolio";

const router = createBrowserRouter([
  {
    path: "/userLogin",
    element: <GuestOnly component={Login} />
  },
  {
    path: "/userRegister",
    element: <GuestOnly component={Register} />
  },
  {
    path: "/homepage",
    element: <AuthOnly component={App} />
  },
  {
    path: "/portfolio",
    element: <AuthOnly component={Portfolio} /> // How to combine these two routes?
  },
  // {
  //   path: "/project",
  //   element: <AuthOnly component={Project} />
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <CookiesProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </CookiesProvider>
    </GlobalProvider>
  </React.StrictMode>
);

reportWebVitals()