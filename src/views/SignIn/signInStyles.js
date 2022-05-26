import { blackColor, whiteColor } from "../../components/RequestComponents/material-dashboard-react";

const signInStyle = (theme) => ({
  paper: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: "5px",
    padding: "1em",
    backgroundColor: whiteColor,
    width: "27%",
    height: "clamp(280px, 50%, 300px)",
    borderRadius: "1em",
    zIndex: "5",
    "& p": {
      marginTop: "2.5rem",
    },
  },
  logo: {
    margin: "auto",
  },
  loginContainer: {
    position: "fixed",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  overlay: {
    position: "fixed",
    zIndex: "3",
    width: "100%",
    height: "100%",
    content: '""',
    display: "flex",
    background: "rgba(0,0,0,0.5)",
  },
  form: {
    marginBottom: "0.4rem",
    display: "flex",
    width: "100%",
  },
  submit: {
    margin: "1.5em 4.5em",
    width: "75%",
    padding: "0.7em",
  },
});

export default signInStyle;
