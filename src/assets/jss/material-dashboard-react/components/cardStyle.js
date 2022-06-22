import { blackColor, whiteColor } from "../../material-dashboard-react";

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "40px",
    borderRadius: "6px",
    color: blackColor,
    background: whiteColor,
    width: "100%",
    boxShadow: "none",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  // cardProfile: {
  //   marginTop: "0px",
  //   textAlign: "center",
  // },
  // cardChart: {
  //   "& p": {
  //     marginTop: "0px",
  //     paddingTop: "0px",
  //   },
  // },
};

export default cardStyle;
