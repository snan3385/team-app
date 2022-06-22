// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Link, Routes, Route } from "react-router-dom";
// import * as AiIcons from "react-icons/ai";
// import { IconContext } from "react-icons/lib";
//
// import "./SidebarStyle.css";
//
// import { Menu, MenuItem, MenuList, Grid } from "@material-ui/core";
// import Setting from "@material-ui/icons/Settings";
// import Support from "@material-ui/icons/Help";
// import Person from "@material-ui/icons/Person";
// import Box from "@material-ui/core/Box";
//
// import MultiMenus from "./MultiMenus";
//
// const Nav = styled.div`
//   background: #ffffff;
//   height: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: right;
//   // justify-content: space-between;
//   margin-left: 280px;
// `;
//
// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
//
// const SidebarNav = styled.nav`
//   // background: #15171c;
//   // background: #19004d;
//   // background: #bfe6cc;
//   //   background: #8099b2;
//   background: #a8a8a8;
//   width: 270px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
//   margin-top: 0px;
//   // margin-top: 88px;
// `;
//
// const SidebarWrap = styled.div`
//   width: 100%;
//   margin-top: 0px;
// `;
//
// const Sidebar = () => {
//   const [sidebar, setSidebar] = useState(true);
//   const [anchorEl, setAnchorEl] = useState(null);
//
//   const showSidebar = () => setSidebar(!sidebar);
//
//   const handleOpenMenu = (e) => {
//     setAnchorEl(e.currentTarget);
//   };
//
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };
//
//   const menus = [
//     {
//       label: "Onboarding",
//       icon: <AiIcons.AiFillHome />,
//       submenu: [
//         {
//           label: "View Onboarding",
//           icon: <AiIcons.AiFillHome />,
//           path: "/event-platform-resource-management/onboarding/view-onboarding",
//         },
//         {
//           label: "Request Onboarding",
//           icon: <AiIcons.AiFillHome />,
//           submenu: [
//             {
//               label: "Request Non-Prod Onboarding",
//               icon: <AiIcons.AiFillHome />,
//               path: "/event-platform-resource-management/onboarding/request-onboarding/non-prod",
//             },
//             {
//               label: "Request Prod Onboarding",
//               icon: <AiIcons.AiFillHome />,
//               path: "/event-platform-resource-management/onboarding/request-onboarding/prod",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: "User-Team Management",
//       icon: <AiIcons.AiFillHome />,
//       submenu: [
//         {
//           label: "Teams",
//           icon: <AiIcons.AiFillHome />,
//           path: "/event-platform-resource-management/onboarding/user-team-management/teams",
//         },
//         {
//           label: "Users",
//           icon: <AiIcons.AiFillHome />,
//           path: "/event-platform-resource-management/onboarding/user-team-management/users",
//         },
//       ],
//     },
//   ];
//
//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>
//         <Nav>
//           <div
//             className="user one"
//             onClick={handleOpenMenu}
//             aria-controls="menu"
//             aria-hidden="true"
//           />
//           <Menu
//             id="menu"
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//             PaperProps={{
//               style: {
//                 marginTop: "80px",
//                 width: "150px",
//                 color: "purple",
//               },
//             }}
//           >
//             <MenuList>
//               <MenuItem>
//                 <Person style={{ marginRight: "5px" }} />
//                 Profile
//               </MenuItem>
//             </MenuList>
//             <MenuList>
//               <MenuItem>
//                 <Setting style={{ marginRight: "5px" }} />
//                 Settings
//               </MenuItem>
//             </MenuList>
//             <MenuList>
//               <MenuItem>
//                 <Support style={{ marginRight: "5px" }} />
//                 Support
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </Nav>
//         <SidebarNav sidebar={sidebar}>
//           <SidebarWrap>
//             <Grid container className="topBar">
//               <Grid item xs={7}>
//                 <Box
//                   component="img"
//                   sx={{
//                     height: 100,
//                     width: 150,
//                     marginTop: 10,
//                     marginLeft: 0,
//                     marginBottom: 2,
//                     maxHeight: { xs: 233, md: 167 },
//                     maxWidth: { xs: 350, md: 250 },
//                   }}
//                   // alt="The house from the offer."
//                   src="https://i0.wp.com/alexlodner.com/wp-content/uploads/2020/03/sysco-logo-01.png?resize=1080%2C640&ssl=1"
//                 />
//               </Grid>
//             </Grid>
//             <MultiMenus menus={menus} />
//           </SidebarWrap>
//         </SidebarNav>
//       </IconContext.Provider>
//     </>
//   );
// };
//
// export default Sidebar;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import "./SidebarStyle.css";

import { Menu, MenuItem, MenuList, Grid } from "@material-ui/core";
import Setting from "@material-ui/icons/Settings";
import Support from "@material-ui/icons/Help";
import Person from "@material-ui/icons/Person";
import Box from "@material-ui/core/Box";

import MultiMenus from "./MultiMenus";
import SidebarNav from "../../components/CustomSideBar/SidebarNav";
import Profile from "../../components/CustomSideBar/Profile";

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const SidebarNav = styled.nav`
//   // background: #15171c;
//   // background: #19004d;
//   // background: #bfe6cc;
//   //   background: #8099b2;
//   background: #a8a8a8;
//   width: 270px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
//   margin-top: 0px;
//   // margin-top: 88px;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
//   margin-top: 0px;
// `;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Profile />
        <SidebarNav sidebar={sidebar} />
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
