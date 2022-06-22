import TeamOnboarding from "./pages/ViewOnboarding/TeamOnboarding";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./pages/SignIn/authConfig";

import SignIn from "./pages/SignIn/SignIn";

import * as routes from "./constants/routes";
import Sidebar from "./pages/Sidebar/Sidebar";
import RequestOnboarding from "./pages/RequestOnboarding/RequestOnboarding";
import ProdRequestOnboarding from "./pages/RequestOnboarding/ProdRequestOnboarding";
import RequestOnboardingAll from "./pages/RequestOnboarding/RequestOnboardinAll";
import EditableTeam from "./pages/Team/EditableTeam";
import AllUsers from "./pages/User/AllUsers";

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

export default function Root(props) {
  return (
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <Router>
          <Routes>
            <Route path={routes.ONBOARDING} exact element={<SidebarLayout />}>
              <Route index element={<TeamOnboarding />} />
              <Route
                path={routes.VIEWONBOARDING}
                exact
                element={<TeamOnboarding />}
              ></Route>
              <Route
                path={routes.REQUESTONBOARDING}
                exact
                element={<RequestOnboardingAll />}
              >
                <Route index element={<RequestOnboarding />} />
                <Route
                  path={routes.PRODREQUESTONBOARDING}
                  exact
                  element={<ProdRequestOnboarding />}
                ></Route>
                <Route
                  path={routes.NONPRODREQUESTONBOARDING}
                  exact
                  element={<RequestOnboarding />}
                ></Route>
              </Route>
            </Route>
            <Route
              path={routes.USERTEAMMANAGEMENT}
              exact
              element={<SidebarLayout />}
            >
              <Route index element={<EditableTeam />} />
              <Route
                path={routes.TEAMMANAGEMENT}
                exact
                element={<EditableTeam />}
              ></Route>
              <Route
                path={routes.USERMANAGEMENT}
                exact
                element={<AllUsers />}
              ></Route>
            </Route>
            <Route path={routes.SIGNIN} exact element={<SignIn />} />
            <Route path={routes.MANAGEMENT} exact element={<SignIn />}></Route>
          </Routes>
        </Router>
      </MsalProvider>
    </React.StrictMode>
  );
}
