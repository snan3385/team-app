import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
  cardText,
} from "./material-dashboard-react";

const dashboardStyle = {
  root: {
    width: "100%",
  },
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cartTitleContainer: {
    paddingTop: "0.8em",
  },
  cardHelpText: {
    ...cardText,
    fontSize: "0.8vw",
    paddingTop: "0.4em",
  },
  cardTitle: {
    ...cardText,
    fontSize: "1.3vw",
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  addButton: {
    border: "1px solid #4caf50",
    backgroundColor: "#ffffff !important",
    color: "#4caf50 !important",
    "&:active": {
      backgroundColor: "#4caf50 !important",
      color: "#ffffff !important",
    },
  },
  deleteButton: {
    "&:active": {
      color: "#d23c3c !important",
    },
  },
};

export default dashboardStyle;
