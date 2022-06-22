import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "../../assets/jss/material-dashboard-react/components/buttonStyle.js";

const useStyles = makeStyles(styles);

export default function RegularButton(props) {
  const classes = useStyles();
  const { innerButton, children, ...rest } = props;

  const btnClasses = classNames({
    [classes.button]: true,
    [classes.innerButton]: innerButton,
  });
  return (
    <Button {...rest} className={btnClasses}>
      {children}
    </Button>
  );
}
