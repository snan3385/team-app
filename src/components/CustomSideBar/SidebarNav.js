import React from "react";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MultiMenus from "../../pages/Sidebar/MultiMenus";
import { makeStyles } from "@material-ui/core/styles";
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import styles from "../../assets/jss/material-dashboard-react/components/sidebarNavStyle";

const useStyles = makeStyles(styles);
const OriginSidebarNav = styled.nav``;

export default function SidebarNav(props) {
  const classes = useStyles();

  const menus = [
    {
      label: "Onboarding",
      icon: <AiIcons.AiFillHome />,
      submenu: [
        {
          label: "View Onboarding",
          icon: <AiIcons.AiFillHome />,
          path: "/event-platform-resource-management/onboarding/view-onboarding",
        },
        {
          label: "Request Onboarding",
          icon: <AiIcons.AiFillHome />,
          submenu: [
            {
              label: "Request Non-Prod Onboarding",
              icon: <AiIcons.AiFillHome />,
              path: "/event-platform-resource-management/onboarding/request-onboarding/non-prod",
            },
            {
              label: "Request Prod Onboarding",
              icon: <AiIcons.AiFillHome />,
              path: "/event-platform-resource-management/onboarding/request-onboarding/prod",
            },
          ],
        },
      ],
    },
    {
      label: "User-Team Management",
      icon: <AiIcons.AiFillHome />,
      submenu: [
        {
          label: "Teams",
          icon: <AiIcons.AiFillHome />,
          path: "/event-platform-resource-management/onboarding/user-team-management/teams",
        },
        {
          label: "Users",
          icon: <AiIcons.AiFillHome />,
          path: "/event-platform-resource-management/onboarding/user-team-management/users",
        },
      ],
    },
  ];

  return (
    <OriginSidebarNav className={classes.navStyle} sidebar={props.sidebar}>
      <div className={classes.wrapper}>
        <Grid container className={classes.topBar}>
          <Grid item xs={7}>
            <Box
              component="img"
              sx={{
                height: 100,
                width: 150,
                marginTop: 10,
                marginLeft: 0,
                marginBottom: 2,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              // alt="The house from the offer."
              src="https://i0.wp.com/alexlodner.com/wp-content/uploads/2020/03/sysco-logo-01.png?resize=1080%2C640&ssl=1"
            />
          </Grid>
        </Grid>
        <MultiMenus menus={menus} />
      </div>
    </OriginSidebarNav>
  );
}
