import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { Typography, Button, IconButton, Grid } from "@material-ui/core";

import "./AddUser.css";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";

import CustomCard from "../../components/CustomCard/Card";
import CustomCardHeader from "../../components/CustomCard/CardHeader";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  topGridContainer: {
    justifyContent: "space-between",
  },
});

const originalRows = [
  {
    name: "Enterprise Platform",
    email: "sa_epe",
    syscoId: "sandbox",
    lastModDate: "Kevin@ss.com",
  },
  {
    name: "Team Canada",
    email: "sa_canada",
    syscoId: "dev",
    lastModDate: "Nanayakkara@ss.com",
  },
  {
    name: "Talent aqusition",
    email: "sa_talent",
    syscoId: "sandbox",
    lastModDate: "Luvi@ss.com",
  },
];

export default function AddUser(props) {
  const [newName, setNewName] = useState("");
  const [newSyscoId, setNewSyscoId] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const classes = useStyles();
  return (
    <>
      {/*<Paper style={{ marginRight: "25px" }} elevation={0}>*/}
      {/*  <div>*/}
      {/*<Card className="root">*/}
      <CustomCard className="card-add-user">
        <CustomCardHeader className="card-header-add-user">
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6">
                <div style={{ marginBottom: "20px" }}>User Information</div>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <IconButton
                // className="icon-button"
                // style={{
                //   marginLeft: "500px",
                //   marginTop: "0px",
                //   marginRight: "10px",
                // }}
                className="close-add-user"
                onClick={() => props.handleCloseAddUserForm(false)}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CustomCardHeader>
        <Box className="content">
          <Grid>
            <Grid>
              <TextField
                InputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                label="Team Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={8}>
              <TextField
                InputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                label="Sysco ID"
                value={newSyscoId}
                onChange={(e) => setNewSyscoId(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              <TextField
                InputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                label="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              <TextField
                InputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                label="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box className="button">
          <Button
            variant="contained"
            color="default"
            // onClick={addUser}
            onClick={() => props.onSubmit(newName, newSyscoId, newEmail)}
          >
            Add User
          </Button>
        </Box>
      </CustomCard>
      {/*</div>*/}
      {/*</Paper>*/}
    </>
  );
}
