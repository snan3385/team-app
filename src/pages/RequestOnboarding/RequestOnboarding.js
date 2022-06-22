import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Checkbox,
  Grid,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";

import CustomButton from "../../components/CustomButtons/Button";
import CustomCard from "../../components/CustomCard/Card";
import CardHeader from "../../components/CustomCard/CardHeader";
import "./RequestOnboarding.css";

export default function RequestOnboarding() {
  const [teamName, setTeamName] = useState("");
  const [teamLead, setTeamLead] = useState("");
  const [teamDeveloper, setTeamDeveloper] = useState("");
  const [teamLeadEmail, setTeamLeadEmail] = useState("");
  const [addedTeamLeads, setAddedTeamLeads] = useState([]);
  const [teamDeveloperEmail, setTeamDeveloperEmail] = useState("");
  const [addedTeamDevelopers, setAddedTeamDevelopers] = useState([]);
  const [teamEmail, setTeamEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleDeleteLead = (index) => {
    const newList = addedTeamLeads.filter(
      (item, itemindex) => itemindex !== index
    );
    setAddedTeamLeads(newList);
  };

  const handleDeleteDeveloper = (index) => {
    const newList = addedTeamDevelopers.filter(
      (item, itemindex) => itemindex !== index
    );
    setAddedTeamDevelopers(newList);
  };

  const checkState = () => {
    // eslint-disable-next-line no-console
    console.log(teamName);
    // eslint-disable-next-line no-console
    console.log(
      addedTeamLeads.map((teamLead, teamLeadEmail) => {
        return teamLead;
      })
    );
    // eslint-disable-next-line no-console
    console.log(
      addedTeamDevelopers.map((teamDeveloper, teamDeveloperEmail) => {
        return teamDeveloper;
      })
    );
    // eslint-disable-next-line no-console
    console.log(teamEmail);
    // eslint-disable-next-line no-console
    console.log(description);
  };

  return (
    <>
      <CustomCard className="card-add-team">
        {/*<div className="all-div-non-prod" elevation={0}>*/}
        <Grid container>
          <Grid>
            {/*<Card className="root-non-prod">*/}
            {/*<CardHeader color="success" className="cardHeaderIcon">*/}
            {/*<div className="create-request-logo" />*/}
            {/*</CardHeader>*/}
            <CardHeader>
              {/*<Typography variant="h6">*/}
              <div className="card-header-add-team">Team Information</div>
              {/*</Typography>*/}
            </CardHeader>
            <div className="body">
              <Grid container>
                <Grid item xs={8} sm={8} md={8}>
                  <Box>
                    <TextField
                      id="team-name"
                      label="Team name"
                      fullWidth
                      helperText="E.g: ETL"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      error={teamName !== "" && teamName.length != 8}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                      }}
                    >
                      <Grid container>
                        {/*<GridItem xs={9}>*/}
                        {/*<Box style={{ marginRight: "2px" }}>*/}
                        {/*<Grid item xs={4}>*/}
                        <div style={{ paddingRight: "1em" }}>
                          <TextField
                            id="input-team-leads"
                            label="Team Lead's name"
                            fullWidth
                            helperText="E.g: jdoe3331"
                            value={teamLead}
                            onChange={(e) => setTeamLead(e.target.value)}
                            error={teamLead !== "" && teamLead.length != 8}
                          />
                        </div>
                        {/*</Grid>*/}
                        {/*<Grid item xs={4}>*/}
                        <div style={{ paddingRight: "1em" }}>
                          <TextField
                            id="input-team-leads-emails"
                            label="Team Lead's Email"
                            fullWidth
                            helperText="E.g: jdoe3331@sysco.com"
                            value={teamLeadEmail}
                            onChange={(e) => setTeamLeadEmail(e.target.value)}
                            error={
                              (teamLeadEmail !== "" &&
                                teamLeadEmail.length != 18) ||
                              (teamLeadEmail !== "" &&
                                !teamLeadEmail.includes("@"))
                            }
                          />
                        </div>
                        {/*</Grid>*/}
                        <Grid item xs={4}>
                          <Box m={2} style={{ width: "1000px" }}>
                            <CustomButton
                              innerButton={true}
                              onClick={() => {
                                setAddedTeamLeads([
                                  ...addedTeamLeads,
                                  {
                                    teamLeadName: teamLead,
                                    teamLeadEmail: teamLeadEmail,
                                  },
                                ]);
                                setTeamLead("");
                                setTeamLeadEmail("");
                              }}
                            >
                              Add Team Lead
                            </CustomButton>
                          </Box>
                        </Grid>
                        <List>
                          {addedTeamLeads.map((teamLead, index) => (
                            <ListItem key={index}>
                              {/*<GridItem xs={1}>*/}
                              <ListItemIcon>
                                <PersonIcon />
                              </ListItemIcon>
                              <div style={{ paddingRight: "1em" }}>
                                <ListItemText
                                  secondary={teamLead.teamLeadName}
                                />
                              </div>
                              <div style={{ paddingRight: "1em" }}>
                                <ListItemText
                                  secondary={teamLead.teamLeadEmail}
                                />
                              </div>
                              <ListItemSecondaryAction
                                onClick={() => handleDeleteLead(index)}
                              >
                                <IconButton edge="end" aria-label="delete">
                                  <DeleteIcon />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Box>

                    <Box
                      sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                      }}
                    >
                      <Grid container>
                        <div style={{ paddingRight: "1em" }}>
                          <TextField
                            id="input-team-developers"
                            label="Team Developer's name"
                            fullWidth
                            helperText="E.g: mson3331"
                            value={teamDeveloper}
                            onChange={(e) => setTeamDeveloper(e.target.value)}
                            error={
                              teamDeveloper !== "" && teamDeveloper.length != 8
                            }
                          />
                        </div>
                        <div style={{ paddingRight: "1em" }}>
                          <TextField
                            id="input-team-developers-emails"
                            label="Team Developer's Email"
                            fullWidth
                            helperText="E.g: jdoe3331@sysco.com"
                            value={teamDeveloperEmail}
                            onChange={(e) =>
                              setTeamDeveloperEmail(e.target.value)
                            }
                            error={
                              (teamDeveloperEmail !== "" &&
                                teamDeveloperEmail.length != 18) ||
                              (teamDeveloperEmail !== "" &&
                                !teamDeveloperEmail.includes("@"))
                            }
                          />
                        </div>
                        <Grid item xs={3}>
                          <Box m={2} style={{ width: "1000px" }}>
                            <CustomButton
                              innerButton={true}
                              onClick={() => {
                                setAddedTeamDevelopers([
                                  ...addedTeamDevelopers,
                                  {
                                    teamDeveloperName: teamDeveloper,
                                    teamDeveloperEmail: teamDeveloperEmail,
                                  },
                                ]);
                                setTeamDeveloper("");
                                setTeamDeveloperEmail("");
                              }}
                            >
                              Add Developer
                            </CustomButton>
                          </Box>
                        </Grid>
                        <List>
                          {addedTeamDevelopers.map((teamDeveloper, index) => (
                            <ListItem key={index}>
                              {/*<GridItem xs={1}>*/}
                              <ListItemIcon>
                                <PersonIcon />
                              </ListItemIcon>
                              <div style={{ paddingRight: "1em" }}>
                                <ListItemText
                                  secondary={teamDeveloper.teamDeveloperName}
                                />
                              </div>
                              <div style={{ paddingRight: "1em" }}>
                                <ListItemText
                                  secondary={teamDeveloper.teamDeveloperEmail}
                                />
                              </div>
                              <ListItemSecondaryAction
                                onClick={() => handleDeleteDeveloper(index)}
                              >
                                <IconButton edge="end" aria-label="delete">
                                  <DeleteIcon />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Box>

                    <FormGroup>
                      <FormControl component="fieldset">
                        <FormLabel
                          component="legend"
                          style={{ paddingTop: "1em" }}
                        >
                          Requested Environments
                        </FormLabel>
                        <div className="checkbox-container">
                          <FormControlLabel
                            control={<Checkbox name="Sandbox" />}
                            label="Sandbox"
                          />
                          <FormControlLabel
                            control={<Checkbox name="Dev" />}
                            label="Dev"
                          />
                          <FormControlLabel
                            control={<Checkbox name="QA" />}
                            label="QA"
                          />
                          <FormControlLabel
                            control={<Checkbox name="Perf" />}
                            label="Perf"
                          />
                        </div>
                      </FormControl>
                    </FormGroup>

                    <TextField
                      label="Service Now Group"
                      id="service-now-group"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <TextField
                      id="team-email"
                      label="Team Email Address"
                      fullWidth
                      helperText="E.g: ETL@sysco.com"
                      value={teamEmail}
                      onChange={(e) => setTeamEmail(e.target.value)}
                    />
                    <TextField
                      id="description"
                      label="Description"
                      fullWidth
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>
              {/*</CardBody>*/}
              <Box mt="30px">
                {/*<Button variant="contained" color="default">*/}
                {/*  Submit Request*/}
                {/*</Button>*/}
                <CustomButton>Submit Request</CustomButton>
              </Box>
            </div>
            {/*</Card>*/}
          </Grid>
        </Grid>
        {/*</div>*/}
      </CustomCard>
    </>
  );
}
