import { grayColor } from "../../material-dashboard-react";

const sidebarNavStyle = {
  navStyle: {
    background: grayColor[12],
    width: "270px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    left: `${({ sidebar }) => (sidebar ? "0" : "-100%")}`,
    transition: "350ms",
    zIndex: "10",
    marginTop: "0px",
    marginLeft: "-10px",
  },
  wrapper: {
    width: "100%",
    marginTop: "0px",
  },
  topBar: {
    justifyContent: "center",
  },
};

export default sidebarNavStyle;
