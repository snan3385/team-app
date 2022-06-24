// import TeamOnboarding from "./pages/ViewOnboarding/TeamOnboarding";
// import React from "react";
//
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Outlet,
// } from "react-router-dom";
//
// import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "./pages/SignIn/authConfig";
//
// import SignIn from "./pages/SignIn/SignIn";
//
// import * as routes from "./constants/routes";
// // import Sidebar from "./pages/Sidebar/Sidebar";
// import RequestOnboarding from "./pages/RequestOnboarding/RequestOnboarding";
// import ProdRequestOnboarding from "./pages/RequestOnboarding/ProdRequestOnboarding";
// import RequestOnboardingAll from "./pages/RequestOnboarding/RequestOnboardinAll";
// import EditableTeam from "./pages/Team/EditableTeam";
// import AllUsers from "./pages/User/AllUsers";
//
// // import Sidebar from "./pages/SidebarNew/Sidebar/index";
// import LeftSidebar from "./pages/SidebarNew/LeftSidebar/index";
// import { ThemeProvider } from "@material-ui/styles";
// import MuiTheme from "./pages/theme";
// // import ScrollToTop from "./utils/ScrollToTop";
// /**
//  * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
//  * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
//  */
// const msalInstance = new PublicClientApplication(msalConfig);
//
// const SidebarLayout = () => (
//   <>
//     <LeftSidebar />
//     <Outlet />
//   </>
// );


const PresentationLayerLayout = () => (
  <>
    <Pre />
    <Outlet />
  </>
);

import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "@material-ui/styles";

import MuiTheme from "./pages/theme";

// Layout Blueprints

// import { LeftSidebar, PresentationLayout } from "./layout-blueprints";
import LeftSidebar from "./pages/SidebarNew/LeftSidebar/index";
import PresentationLayout from "./pages/SidebarNew/PresentationLayout/index";


// Example Pages

// import Buttons from "./example-pages/Buttons";
// import Dropdowns from "./example-pages/Dropdowns";
// import NavigationMenus from "./example-pages/NavigationMenus";
// import ProgressBars from "./example-pages/ProgressBars";
// import Pagination from "./example-pages/Pagination";
// import Scrollable from "./example-pages/Scrollable";
// import Badges from "./example-pages/Badges";
// import Icons from "./example-pages/Icons";
// import UtilitiesHelpers from "./example-pages/UtilitiesHelpers";
// import RegularTables1 from "./example-pages/RegularTables1";
// import RegularTables4 from "./example-pages/RegularTables4";
// import FormsControls from "./example-pages/FormsControls";

// const DashboardDefault = lazy(() => import("./example-pages/DashboardDefault"));
// const Cards3 = lazy(() => import("./example-pages/Cards3"));
const LandingPage = lazy(() => import("./pages/LandingPage/index"));
// const Accordions = lazy(() => import("./example-pages/Accordions"));
// const Modals = lazy(() => import("./example-pages/Modals"));
// const Notifications = lazy(() => import("./example-pages/Notifications"));
// const Popovers = lazy(() => import("./example-pages/Popovers"));
// const Tabs = lazy(() => import("./example-pages/Tabs"));
// const ApexCharts = lazy(() => import("./example-pages/ApexCharts"));
// const Maps = lazy(() => import("./example-pages/Maps"));
// const ListGroups = lazy(() => import("./example-pages/ListGroups"));

export default function Root(props) {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };

  return (
    //   <ThemeProvider theme={MuiTheme}>
    // <React.StrictMode>
    //   <MsalProvider instance={msalInstance}>
    //     <Router>
    //       <Routes>
    //         <Route path={routes.ONBOARDING} exact element={<SidebarLayout />}>
    //           {/*<Route index element={<TeamOnboarding />} />*/}
    //           {/*<Route*/}
    //           {/*  path={routes.VIEWONBOARDING}*/}
    //           {/*  exact*/}
    //           {/*  element={<TeamOnboarding />}*/}
    //           {/*></Route>*/}
    //           {/*<Route*/}
    //           {/*  path={routes.REQUESTONBOARDING}*/}
    //           {/*  exact*/}
    //           {/*  element={<RequestOnboardingAll />}*/}
    //           {/*>*/}
    //           {/*  <Route index element={<RequestOnboarding />} />*/}
    //           {/*  <Route*/}
    //           {/*    path={routes.PRODREQUESTONBOARDING}*/}
    //           {/*    exact*/}
    //           {/*    element={<ProdRequestOnboarding />}*/}
    //           {/*  ></Route>*/}
    //           {/*  <Route*/}
    //           {/*    path={routes.NONPRODREQUESTONBOARDING}*/}
    //           {/*    exact*/}
    //           {/*    element={<RequestOnboarding />}*/}
    //           {/*  ></Route>*/}
    //           {/*</Route>*/}
    //         </Route>
    //         {/*<Route*/}
    //         {/*  path={routes.USERTEAMMANAGEMENT}*/}
    //         {/*  exact*/}
    //         {/*  element={<SidebarLayout />}*/}
    //         {/*>*/}
    //         {/*  <Route index element={<EditableTeam />} />*/}
    //         {/*  <Route*/}
    //         {/*    path={routes.TEAMMANAGEMENT}*/}
    //         {/*    exact*/}
    //         {/*    element={<EditableTeam />}*/}
    //         {/*  ></Route>*/}
    //         {/*  <Route*/}
    //         {/*    path={routes.USERMANAGEMENT}*/}
    //         {/*    exact*/}
    //         {/*    element={<AllUsers />}*/}
    //         {/*  ></Route>*/}
    //         {/*</Route>*/}
    //         {/*<Route path={routes.SIGNIN} exact element={<SignIn />} />*/}
    //         {/*<Route path={routes.MANAGEMENT} exact element={<SignIn />}></Route>*/}
    //       </Routes>
    //     </Router>
    //   </MsalProvider>
    // </React.StrictMode>
    //   </ThemeProvider>

    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load the live preview examples
              </div>
            </div>
          }
        >
          <Routes>
            {/*<Redirect exact from="/" to="/LandingPage" />*/}
            <Route path="/" element={<Navigate replace to="/LandingPage" />} />
            <Route path={["/LandingPage"]}>
              <PresentationLayout>
                <Routes location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route path="/LandingPage" element={<LandingPage />} />
                  </motion.div>
                </Routes>
              </PresentationLayout>
            </Route>

            <Route
              path={[
                "/DashboardDefault",
                "/Buttons",
                "/Dropdowns",
                "/NavigationMenus",
                "/ProgressBars",
                "/Pagination",
                "/Scrollable",
                "/Badges",
                "/Icons",
                "/UtilitiesHelpers",
                "/Cards3",
                "/Accordions",
                "/Modals",
                "/Notifications",
                "/Popovers",
                "/Tabs",
                "/RegularTables1",
                "/RegularTables4",
                "/FormsControls",
                "/ApexCharts",
                "/Maps",
                "/ListGroups",
              ]}
            >
              <LeftSidebar>
                <Routes location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    {/*<Route*/}
                    {/*  path="/DashboardDefault"*/}
                    {/*  component={DashboardDefault}*/}
                    {/*/>*/}
                    {/*<Route path="/Buttons" component={Buttons} />*/}
                    {/*<Route path="/Dropdowns" component={Dropdowns} />*/}
                    {/*<Route*/}
                    {/*  path="/NavigationMenus"*/}
                    {/*  component={NavigationMenus}*/}
                    {/*/>*/}
                    {/*<Route path="/ProgressBars" component={ProgressBars} />*/}
                    {/*<Route path="/Pagination" component={Pagination} />*/}
                    {/*<Route path="/Scrollable" component={Scrollable} />*/}
                    {/*<Route path="/Badges" component={Badges} />*/}
                    {/*<Route path="/Icons" component={Icons} />*/}
                    {/*<Route*/}
                    {/*  path="/UtilitiesHelpers"*/}
                    {/*  component={UtilitiesHelpers}*/}
                    {/*/>*/}
                    {/*<Route path="/Cards3" component={Cards3} />*/}
                    {/*<Route path="/Accordions" component={Accordions} />*/}
                    {/*<Route path="/Modals" component={Modals} />*/}
                    {/*<Route path="/Notifications" component={Notifications} />*/}
                    {/*<Route path="/Popovers" component={Popovers} />*/}
                    {/*<Route path="/Tabs" component={Tabs} />*/}
                    {/*<Route path="/RegularTables1" component={RegularTables1} />*/}
                    {/*<Route path="/RegularTables4" component={RegularTables4} />*/}
                    {/*<Route path="/FormsControls" component={FormsControls} />*/}
                    {/*<Route path="/ApexCharts" component={ApexCharts} />*/}
                    {/*<Route path="/Maps" component={Maps} />*/}
                    {/*<Route path="/ListGroups" component={ListGroups} />*/}
                  </motion.div>
                </Routes>
              </LeftSidebar>
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
}
