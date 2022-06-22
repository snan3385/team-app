import { blueColor, whiteColor } from "../../material-dashboard-react";

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    borderRadius: "3px",
    position: "relative",
    color: whiteColor,
    backgroundColor: blueColor,
    "&:hover,&:focus": {
      color: whiteColor,
      backgroundColor: "#336699",
    },
    padding: "5px 10px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    textAlign: "center",
    lineHeight: "1.52857143",
    variant: "contained",
    border: "1px solid",
    borderColor: blueColor,
  },
  innerButton: {
    backgroundColor: "transparent",
    color: blueColor,
    variant: "outlined",
  },
};

export default buttonStyle;
