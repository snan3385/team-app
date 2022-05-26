import TeamOnboarding from "./pages/TeamOnboarding";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import RequestOnboarding from "./pages/RequestOnboarding";

import React from "react";

// import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./views/SignIn/authConfig";

// importing the layouts and views
// import Admin from "./layouts/Admin";
import SignIn from "./views/SignIn/SignIn";

// importing the admin portal routes
import * as routes from "./constants/routes";
import Sidebar from "./components/Sidebar";
import RequestOnboarding from "./pages/RequestOnboarding";

// import { Navigate } from "react-router-dom";

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);

export default function Root(props) {
  return (
    // <Router>
    //   {/*<Provider store={store}>*/}
    //   {/*  <AppSidebar />*/}
    //   {/*</Provider>*/}
    //   {/*<section>{props.name} is mounted!</section>*/}
    //   <Sidebar />
    //   {/*<TeamOnboarding />*/}
    //   <Routes>
    //     <Route
    //       path="/event-platform-resource-management/onboarding/view-onboarding"
    //       exact
    //       element={<TeamOnboarding />}
    //     />
    //     <Route
    //       path="/event-platform-resource-management/"
    //       exact
    //       element={<TeamOnboarding />}
    //     />
    //     <Route
    //       path="/event-platform-resource-management/onboarding/request-onboarding"
    //       exact
    //       element={<RequestOnboarding />}
    //     />
    //   </Routes>
    // </Router>

    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        {/*<BrowserRouter>*/}
        <Router>
          {/*<Switch>*/}
          <Routes>
            <Route path={routes.SIGNIN} exact element={<SignIn />} />
            {/*<Route path={routes.ADMIN} component={Admin} />*/}
            {/*<Redirect from={routes.AUTH} to={routes.ADMIN} />*/}
            {/*<Redirect*/}
            {/*  exact*/}
            {/*  from="/event-platform-resource-management/"*/}
            {/*  to={routes.SIGNIN}*/}
            {/*/>*/}
            <Route
              path="/event-platform-resource-management/"
              exact
              element={<SignIn />}
            ></Route>
            <Route
              path="/event-platform-resource-management/onboarding/view-onboarding"
              exact
              element={<TeamOnboarding />}
            />
            <Route
              path="/event-platform-resource-management/onboarding/request-onboarding"
              exact
              element={<RequestOnboarding />}
            />
            {/*} />*/}
            {/*</Switch>*/}
          </Routes>
          {/*</BrowserRouter>*/}
        </Router>
      </MsalProvider>
    </React.StrictMode>
  );
}
