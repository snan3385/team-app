import classNames from "classnames";
import React, { useState } from "react";
import { Grid, Menu, MenuItem, MenuList } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MultiMenus from "../../pages/Sidebar/MultiMenus";
import { makeStyles } from "@material-ui/core/styles";
import "../../pages/Sidebar/SidebarStyle.css";
import Person from "@material-ui/icons/Person";
import Setting from "@material-ui/icons/Settings";
import Support from "@material-ui/icons/Help";

import styles from "../../assets/jss/material-dashboard-react/components/profileStyle";

const useStyles = makeStyles(styles);

export default function Profile(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.profileTop}>
      <div
        className="user one"
        onClick={handleOpenMenu}
        aria-controls="menu"
        aria-hidden="true"
      />
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
    </div>
  );
}
