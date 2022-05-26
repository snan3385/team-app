import React, { useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import List from "@material-ui/core/List";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  Checkbox,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";

import EmailIcon from "@material-ui/icons/Email";

// core components
import GridItem from "../components/RequestComponents/GridItem";
import GridContainer from "../components/RequestComponents/GridContainer.js";
import CustomInput from "../components/RequestComponents/CustomInput.js";
import Button from "../components/RequestComponents/Button.js";
import Card from "../components/RequestComponents/Card.js";
import CardHeader from "../components/RequestComponents/CardHeader.js";
import CardBody from "../components/RequestComponents/CardBody.js";
import CardFooter from "../components/RequestComponents/CardFooter.js";

import styles from "../components/RequestComponents/dashboardStyle.js";
import "../components/RequestComponents/onboardingForm.css";
import { Delete } from "@material-ui/icons";

import "./RequestOnboarding.css";
import Sidebar from "../components/Sidebar";

const useStyles = makeStyles(styles);

export default function RequestOnboarding() {
  const classes = useStyles();

  const [teamType, setTeamType] = useState(20);

  const [publishingAPI, setPublishingAPI] = useState("");
  const [consumingAPI, setConsumingAPI] = useState("");
  const [addedPublishingAPIs, setAddedPublishingAPIs] = useState([]);
  const [addedConsumingAPIs, setAddedConsumingAPIs] = useState([]);

  const [publishingApiTph, setPublishingApiTph] = useState("");
  const [publishingApiTps, setPublishingApiTps] = useState("");
  const [consumingApiTph, setConsumingApiTph] = useState("");
  const [consumingApiTps, setConsumingApiTps] = useState("");

  const [isPublisherTpsDisabled, setIsPublisherTpsDisabled] = useState(false);
  const [isPublisherTphDisabled, setIsPublisherTphDisabled] = useState(false);

  const [teamLead, setTeamLead] = useState("");
  const [teamDeveloper, setTeamDeveloper] = useState("");
  // const [addedTeamLeads, setAddedTeamLeads] = useState([]);
  // const [addedTeamDevelopers, setAddedTeamDevelopers] = useState([]);

  const [teamLeadEmail, setTeamLeadEmail] = useState("");
  const [addedTeamLeads, setAddedTeamLeads] = useState([]);
  const [teamDeveloperEmail, setTeamDeveloperEmail] = useState("");
  const [addedTeamDevelopers, setAddedTeamDevelopers] = useState([]);

  const handleTeamTypeChange = (event) => {
    setTeamType(event.target.value);
  };

  const handleApiChange = (event) => {
    if (event.target.id === "publisher-traffic-per-second") {
      setPublishingApiTps(event.target.value);
    } else if (event.target.id === "publisher-traffic-per-hour") {
      setPublishingApiTph(event.target.value);
    } else if (event.target.id === "consumer-traffic-per-hour") {
      setConsumingApiTph(event.target.value);
    } else if (event.target.id === "publisher-traffic-per-second") {
      setConsumingApiTps(event.target.value);
    }
  };

  const handlePublishedApis = () => {
    setAddedPublishingAPIs([...addedPublishingAPIs, publishingAPI]);
    setPublishingAPI("");
  };

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

  return (
    <>
      <Sidebar />
      <div className="all-div">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card className={classes.root}>
              <CardHeader color="success" className="cardHeaderIcon">
                <div className="create-request-logo" />
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={8} sm={8} md={8}>
                    <Box>
                      <Typography variant="h6">
                        <div style={{ padding: "0.4em 0" }}>
                          Team Information
                        </div>
                      </Typography>
                      <FormControl className="input-team-type">
                        {/*<InputLabel id="label-team-type">*/}
                        {/*  Are you an API Publisher or Consumer?*/}
                        {/*</InputLabel>*/}
                        {/*<Select*/}
                        {/*  labelId="label-team-type"*/}
                        {/*  id="select-team-type"*/}
                        {/*  value={teamType}*/}
                        {/*  onChange={handleTeamTypeChange}*/}
                        {/*  MenuProps={{*/}
                        {/*    anchorOrigin: {*/}
                        {/*      vertical: "bottom",*/}
                        {/*      horizontal: "left",*/}
                        {/*    },*/}
                        {/*    transformOrigin: {*/}
                        {/*      vertical: "top",*/}
                        {/*      horizontal: "left",*/}
                        {/*    },*/}
                        {/*    getContentAnchorEl: null,*/}
                        {/*  }}*/}
                        {/*>*/}
                        {/*  <MenuItem value={10}>Consumer</MenuItem>*/}
                        {/*  <MenuItem value={20}>Publisher</MenuItem>*/}
                        {/*</Select>*/}
                      </FormControl>

                      <CustomInput
                        labelText="Team name"
                        id="team-name"
                        formControlProps={{}}
                      />
                      <Box
                        sx={{
                          width: "100%",
                          bgcolor: "background.paper",
                        }}
                      >
                        <GridContainer>
                          {/*<GridItem xs={9}>*/}
                          <GridItem xs={4}>
                            <TextField
                              id="input-team-leads"
                              label="Team Lead's name"
                              fullWidth
                              helperText="E.g: jdoe3331"
                              value={teamLead}
                              onChange={(e) => setTeamLead(e.target.value)}
                              error={teamLead !== "" && teamLead.length != 8}
                            />
                          </GridItem>
                          <GridItem xs={4}>
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
                          </GridItem>
                          <GridItem
                            xs={4}
                            sx={{
                              width: "100%",
                              bgcolor: "background.paper",
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="success"
                              className={classes.addButton}
                              onClick={() => {
                                setAddedTeamLeads([
                                  ...addedTeamLeads,
                                  {
                                    teamLeadName: teamLead,
                                    teamLeadEmail: teamLeadEmail,
                                  },
                                ]);
                                // setAddedTeamLeadsEmail([...addedTeamLeadsEmail, teamLeadEmail]);
                                setTeamLead("");
                                setTeamLeadEmail("");
                              }}
                            >
                              Add Team Lead
                            </Button>
                          </GridItem>
                          {/*<GridItem xs={4}>*/}
                          <List className={classes.list}>
                            {addedTeamLeads.map((teamLead, index) => (
                              <ListItem
                                className={classes.inlineBlock}
                                key={index}
                              >
                                {/*<GridItem xs={1}>*/}
                                <ListItemIcon>
                                  <PersonIcon />
                                </ListItemIcon>
                                {/*</GridItem>*/}
                                <GridItem xs={4}>
                                  {/*<Box sx={{ width: 50 }}>*/}
                                  <ListItemText
                                    secondary={teamLead.teamLeadName}
                                  />
                                  {/*</Box>*/}
                                </GridItem>
                                <GridItem xs={8}>
                                  <ListItemText
                                    secondary={teamLead.teamLeadEmail}
                                  />
                                </GridItem>
                                {/*<GridItem xs={1}>*/}
                                <ListItemSecondaryAction
                                  onClick={() => handleDeleteLead(index)}
                                >
                                  <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon
                                      className={classes.deleteButton}
                                    />
                                  </IconButton>
                                </ListItemSecondaryAction>
                                {/*</GridItem>*/}
                              </ListItem>
                            ))}
                          </List>
                          {/*</GridItem>*/}
                          {/*<GridItem xs={4}>*/}
                          {/*<List className={classes.list}>*/}
                          {/*    {addedTeamLeadsEmail.map((teamLeadEmail) => (*/}
                          {/*        <ListItem className={classes.inlineBlock}>*/}
                          {/*          <ListItemIcon>*/}
                          {/*            <EmailIcon />*/}
                          {/*          </ListItemIcon>*/}
                          {/*          <ListItemText secondary={teamLeadEmail} />*/}
                          {/*          <ListItemSecondaryAction>*/}
                          {/*            <IconButton edge="end" aria-label="delete">*/}
                          {/*              <DeleteIcon*/}
                          {/*                className={classes.deleteButton}*/}
                          {/*              />*/}
                          {/*            </IconButton>*/}
                          {/*          </ListItemSecondaryAction>*/}
                          {/*        </ListItem>*/}
                          {/*    ))}*/}
                          {/*</List>*/}
                          {/*</GridItem>*/}
                        </GridContainer>
                      </Box>

                      <Box
                        sx={{
                          width: "100%",
                          bgcolor: "background.paper",
                        }}
                      >
                        <GridContainer>
                          {/*<GridItem xs={9}>*/}
                          <GridItem xs={4}>
                            <TextField
                              id="input-team-developers"
                              label="Team Developer's name"
                              fullWidth
                              helperText="E.g: mson3331"
                              value={teamDeveloper}
                              onChange={(e) => setTeamDeveloper(e.target.value)}
                              error={
                                teamDeveloper !== "" &&
                                teamDeveloper.length != 8
                              }
                            />
                          </GridItem>
                          <GridItem xs={4}>
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
                          </GridItem>
                          {/*<List className={classes.list}>*/}
                          {/*  {addedTeamDevelopers.map((teamDeveloperName) => (*/}
                          {/*    <ListItem className={classes.inlineBlock}>*/}
                          {/*      <ListItemIcon>*/}
                          {/*        <PersonIcon />*/}
                          {/*      </ListItemIcon>*/}
                          {/*      <ListItemText secondary={teamDeveloperName} />*/}
                          {/*      <ListItemSecondaryAction>*/}
                          {/*        <IconButton edge="end" aria-label="delete">*/}
                          {/*          <DeleteIcon*/}
                          {/*            className={classes.deleteButton}*/}
                          {/*          />*/}
                          {/*        </IconButton>*/}
                          {/*      </ListItemSecondaryAction>*/}
                          {/*    </ListItem>*/}
                          {/*  ))}*/}
                          {/*</List>*/}
                          {/*</GridItem>*/}
                          <GridItem
                            xs={3}
                            sx={{
                              width: "100%",
                              bgcolor: "background.paper",
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="success"
                              className={classes.addButton}
                              onClick={() => {
                                setAddedTeamDevelopers([
                                  ...addedTeamDevelopers,
                                  {
                                    teamDeveloperName: teamDeveloper,
                                    teamDeveloperEmail: teamDeveloperEmail,
                                  },
                                ]);
                                // setAddedTeamLeadsEmail([...addedTeamLeadsEmail, teamLeadEmail]);
                                setTeamDeveloper("");
                                setTeamDeveloperEmail("");
                              }}
                            >
                              Add Developer
                            </Button>
                          </GridItem>
                          <List className={classes.list}>
                            {addedTeamDevelopers.map((teamDeveloper, index) => (
                              <ListItem
                                className={classes.inlineBlock}
                                key={index}
                              >
                                {/*<GridItem xs={1}>*/}
                                <ListItemIcon>
                                  <PersonIcon />
                                </ListItemIcon>
                                {/*</GridItem>*/}
                                <GridItem xs={4}>
                                  {/*<Box sx={{ width: 50 }}>*/}
                                  <ListItemText
                                    secondary={teamDeveloper.teamDeveloperName}
                                  />
                                  {/*</Box>*/}
                                </GridItem>
                                <GridItem xs={8}>
                                  <ListItemText
                                    secondary={teamDeveloper.teamDeveloperEmail}
                                  />
                                </GridItem>
                                {/*<GridItem xs={1}>*/}
                                <ListItemSecondaryAction
                                  onClick={() => handleDeleteDeveloper(index)}
                                >
                                  <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon
                                      className={classes.deleteButton}
                                    />
                                  </IconButton>
                                </ListItemSecondaryAction>
                                {/*</GridItem>*/}
                              </ListItem>
                            ))}
                          </List>
                        </GridContainer>
                      </Box>

                      <FormGroup>
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
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
                              control={<Checkbox name="Non-Prod" />}
                              label="Non-Prod"
                            />
                            <FormControlLabel
                              control={<Checkbox name="Prod" />}
                              label="Prod"
                            />
                          </div>
                        </FormControl>
                      </FormGroup>

                      <CustomInput
                        labelText="Service Now Group"
                        id="service-now-group"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />

                      <CustomInput
                        labelText="Team Email Address"
                        id="team-email-alias"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />

                      <CustomInput
                        labelText="Description"
                        id="additional-comments"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </Box>
                  </GridItem>

                  {/*{teamType === 20 && (*/}
                  {/*  <GridItem xs={12} sm={6} md={6} lg={6} id="api-detail-panel">*/}
                  {/*    <Box>*/}
                  {/*      <Typography variant="h6">*/}
                  {/*        <div className="api-detail-heading">*/}
                  {/*          Publishing API(s) and Rationale*/}
                  {/*        </div>*/}
                  {/*      </Typography>*/}
                  {/*      <div className="peak-traffic">*/}
                  {/*        <FormControl*/}
                  {/*          component="fieldset"*/}
                  {/*          className={classes.formControl}*/}
                  {/*        >*/}
                  {/*          <FormLabel component="legend">*/}
                  {/*            Peak Combined Consumer Traffic to Your API(s)*/}
                  {/*          </FormLabel>*/}
                  {/*          <FormHelperText>*/}
                  {/*            Expected traffic from All API consumers to your*/}
                  {/*            APIs, if higher than 25 requests per second*/}
                  {/*          </FormHelperText>*/}
                  {/*          <GridContainer>*/}
                  {/*            <GridItem xs={8}>*/}
                  {/*              <FormGroup>*/}
                  {/*                <div className="peak-traffic-container">*/}
                  {/*                  <TextField*/}
                  {/*                    id="publisher-traffic-per-second"*/}
                  {/*                    label="Traffic Per Second"*/}
                  {/*                    variant="outlined"*/}
                  {/*                    value={publishingApiTps}*/}
                  {/*                    disabled={isPublisherTpsDisabled}*/}
                  {/*                    onChange={(e) => handleApiChange(e)}*/}
                  {/*                  />*/}
                  {/*                  <TextField*/}
                  {/*                    id="publisher-traffic-per-hour"*/}
                  {/*                    label="Traffic Per Hour"*/}
                  {/*                    variant="outlined"*/}
                  {/*                    value={publishingApiTph}*/}
                  {/*                    disabled={isPublisherTphDisabled}*/}
                  {/*                    onChange={(e) => handleApiChange(e)}*/}
                  {/*                  />*/}
                  {/*                </div>*/}
                  {/*              </FormGroup>*/}
                  {/*            </GridItem>*/}
                  {/*          </GridContainer>*/}
                  {/*        </FormControl>*/}
                  {/*      </div>*/}
                  {/*    </Box>*/}
                  {/*    <div className="add-api-list">*/}
                  {/*      <GridContainer>*/}
                  {/*        <GridItem xs={9}>*/}
                  {/*          <TextField*/}
                  {/*            id="input-publishing-apis"*/}
                  {/*            label="Publishing APIs"*/}
                  {/*            fullWidth*/}
                  {/*            value={publishingAPI}*/}
                  {/*            onChange={(e) => setPublishingAPI(e.target.value)}*/}
                  {/*            helperText="E.g: Sysco API Linter"*/}
                  {/*          />*/}
                  {/*          <List className={classes.list}>*/}
                  {/*            {addedPublishingAPIs.map(*/}
                  {/*              (publishingAPIs, index) => {*/}
                  {/*                let trafficAmount;*/}
                  {/*                if (publishingApiTph) {*/}
                  {/*                  trafficAmount = "TPH: " + publishingApiTph;*/}
                  {/*                } else if (publishingApiTps) {*/}
                  {/*                  trafficAmount = "TPS " + publishingApiTps;*/}
                  {/*                }*/}
                  {/*                return (*/}
                  {/*                  <ListItem*/}
                  {/*                    key={index}*/}
                  {/*                    className={classes.inlineBlock}*/}
                  {/*                  >*/}
                  {/*                    <ListItemText*/}
                  {/*                      primary={publishingAPIs}*/}
                  {/*                      secondary={trafficAmount}*/}
                  {/*                    />*/}
                  {/*                    <ListItemSecondaryAction>*/}
                  {/*                      <IconButton*/}
                  {/*                        edge="end"*/}
                  {/*                        aria-label="delete"*/}
                  {/*                      >*/}
                  {/*                        <DeleteIcon*/}
                  {/*                          className={classes.deleteButton}*/}
                  {/*                        />*/}
                  {/*                      </IconButton>*/}
                  {/*                    </ListItemSecondaryAction>*/}
                  {/*                  </ListItem>*/}
                  {/*                );*/}
                  {/*              }*/}
                  {/*            )}*/}
                  {/*          </List>*/}
                  {/*        </GridItem>*/}
                  {/*        <GridItem*/}
                  {/*          xs={3}*/}
                  {/*          sx={{*/}
                  {/*            width: "100%",*/}
                  {/*            bgcolor: "background.paper",*/}
                  {/*          }}*/}
                  {/*        >*/}
                  {/*          <Button*/}
                  {/*            variant="outlined"*/}
                  {/*            color="success"*/}
                  {/*            className={classes.addButton}*/}
                  {/*            onClick={() => {*/}
                  {/*              handlePublishedApis();*/}
                  {/*            }}*/}
                  {/*          >*/}
                  {/*            Add API*/}
                  {/*          </Button>*/}
                  {/*        </GridItem>*/}
                  {/*      </GridContainer>*/}
                  {/*    </div>*/}
                  {/*  </GridItem>*/}
                  {/*)}*/}
                  {/*<GridItem xs={12} sm={6} md={6} lg={6} id="api-detail-panel">*/}
                  {/*  <Box>*/}
                  {/*    <Typography variant="h6">*/}
                  {/*      <div className="api-detail-heading">*/}
                  {/*        Consuming API(s) and Rationale*/}
                  {/*      </div>*/}
                  {/*    </Typography>*/}
                  {/*    <div className="peak-traffic">*/}
                  {/*      <FormControl*/}
                  {/*        component="fieldset"*/}
                  {/*        className={classes.formControl}*/}
                  {/*      >*/}
                  {/*        <FormLabel component="legend">*/}
                  {/*          Peak Combined Traffic consumed by Your API(s)/Apps*/}
                  {/*        </FormLabel>*/}
                  {/*        <FormHelperText>*/}
                  {/*          Expected traffic to be consumed by your team, if*/}
                  {/*          higher than 25 requests per second*/}
                  {/*        </FormHelperText>*/}
                  {/*        <GridContainer>*/}
                  {/*          <GridItem xs={8}>*/}
                  {/*            <FormGroup>*/}
                  {/*              <div className="peak-traffic-container">*/}
                  {/*                <TextField*/}
                  {/*                  id="consumer-traffic-per-second"*/}
                  {/*                  label="Traffic Per Second"*/}
                  {/*                  variant="outlined"*/}
                  {/*                />*/}
                  {/*                <TextField*/}
                  {/*                  id="consumer-traffic-per-hour"*/}
                  {/*                  label="Traffic Per Hour"*/}
                  {/*                  variant="outlined"*/}
                  {/*                />*/}
                  {/*              </div>*/}
                  {/*            </FormGroup>*/}
                  {/*          </GridItem>*/}
                  {/*        </GridContainer>*/}
                  {/*      </FormControl>*/}
                  {/*    </div>*/}
                  {/*  </Box>*/}
                  {/*  <div className="add-api-list">*/}
                  {/*    <GridContainer>*/}
                  {/*      <GridItem xs={9}>*/}
                  {/*        <TextField*/}
                  {/*          id="input-consuming-apis"*/}
                  {/*          label="Consuming APIs"*/}
                  {/*          fullWidth*/}
                  {/*          helperText="E.g: Sysco API Linter"*/}
                  {/*          value={consumingAPI}*/}
                  {/*          onChange={(e) => setConsumingAPI(e.target.value)}*/}
                  {/*        />*/}
                  {/*        <List className={classes.list}>*/}
                  {/*          {addedConsumingAPIs.map((consumingAPIName, index) => (*/}
                  {/*            <ListItem*/}
                  {/*              key={index}*/}
                  {/*              className={classes.inlineBlock}*/}
                  {/*            >*/}
                  {/*              <ListItemText primary={consumingAPIName} />*/}
                  {/*              <ListItemSecondaryAction>*/}
                  {/*                <IconButton edge="end" aria-label="delete">*/}
                  {/*                  <DeleteIcon*/}
                  {/*                    className={classes.deleteButton}*/}
                  {/*                  />*/}
                  {/*                </IconButton>*/}
                  {/*              </ListItemSecondaryAction>*/}
                  {/*            </ListItem>*/}
                  {/*          ))}*/}
                  {/*        </List>*/}
                  {/*      </GridItem>*/}
                  {/*      <GridItem*/}
                  {/*        xs={3}*/}
                  {/*        sx={{*/}
                  {/*          width: "100%",*/}
                  {/*          bgcolor: "background.paper",*/}
                  {/*        }}*/}
                  {/*      >*/}
                  {/*        <Button*/}
                  {/*          variant="outlined"*/}
                  {/*          color="success"*/}
                  {/*          onClick={() => {*/}
                  {/*            setAddedConsumingAPIs([*/}
                  {/*              ...addedConsumingAPIs,*/}
                  {/*              consumingAPI,*/}
                  {/*            ]);*/}
                  {/*            setConsumingAPI("");*/}
                  {/*          }}*/}
                  {/*          className={classes.addButton}*/}
                  {/*        >*/}
                  {/*          Add API*/}
                  {/*        </Button>*/}
                  {/*      </GridItem>*/}
                  {/*    </GridContainer>*/}
                  {/*  </div>*/}
                  {/*</GridItem>*/}
                </GridContainer>
              </CardBody>

              <CardFooter>
                <Button color="success">Submit Request</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
