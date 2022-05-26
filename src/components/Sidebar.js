import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

import "./SidebarStyle.css";

import { Menu, MenuItem, MenuList } from "@material-ui/core";
import Setting from "@material-ui/icons/Settings";
import Support from "@material-ui/icons/Help";
import Person from "@material-ui/icons/Person";
import TeamOnboarding from "../pages/TeamOnboarding";

const Nav = styled.div`
  background: #15171c;
  // background: #19004d;
  height: 80px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  // background: #19004d;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  margin-top: 8px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          {/*<NavIcon to="#">*/}
          {/*  <FaIcons.FaBars onClick={showSidebar} />*/}
          {/*</NavIcon>*/}
          <div
            className="user one"
            onClick={handleOpenMenu}
            aria-controls="menu"
          ></div>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                marginTop: "80px",
                width: "150px",
                color: "purple",
              },
            }}
          >
            <MenuList>
              <MenuItem>
                <Person style={{ marginRight: "5px" }} />
                Profile
              </MenuItem>
            </MenuList>
            <MenuList>
              <MenuItem>
                <Setting style={{ marginRight: "5px" }} />
                Settings
              </MenuItem>
            </MenuList>
            <MenuList>
              <MenuItem>
                <Support style={{ marginRight: "5px" }} />
                Support
              </MenuItem>
            </MenuList>
          </Menu>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/*<NavIcon to="#">*/}
            {/*  <AiIcons.AiOutlineClose onClick={showSidebar} />*/}
            {/*</NavIcon>*/}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
