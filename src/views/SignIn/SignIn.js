import React, { useState } from "react";

// import { useHistory } from "react-router";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import styles from "./signInStyles.js";
import logo from "../../components/img/dim-connect-logo-dark.png";
import bgImage from "../../components/img/main-bg.jpeg";

import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://sysco.com/">
        Sysco
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(styles);

export default function SignIn() {
  const navigate = useNavigate();

  const [isAuthenticated, setAuthenticated] = useState(useIsAuthenticated());
  // const history = useHistory();
  const { instance } = useMsal();
  const classes = useStyles();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance
        .loginPopup(loginRequest)
        .then((success) => {
          setAuthenticated(true);
        })
        .then(() => {
          // history.push("/admin");
          navigate(
            "/event-platform-resource-management/onboarding/view-onboarding"
          );
        })
        .catch((e) => {
          // console.log(e);
        });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        // console.log(e);
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div
        className={classes.loginContainer}
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className={classes.overlay}>
          <div className={classes.paper}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography variant="body2">
              Data In Motion Request Management Platform
            </Typography>
            <form className={classes.form} noValidate>
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => handleLogin("popup")}
              >
                Login with SAML
              </Button>
            </form>
            <Box>
              <Copyright />
            </Box>
          </div>
        </div>
      </div>
    </Container>
    // <div>Hi</div>
  );
}
