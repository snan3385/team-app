import Box from "@material-ui/core/Box";
import SearchBar from "material-ui-search-bar";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  TablePagination,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import "../pages/RequestOnboarding/ProdRequestOnboarding.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CustomTable(props) {
  const [rows, setRows] = useState(props.originalRows);
  // const [searched, setSearched] = useState("");
  // const [name, setName] = useState("");
  // const [serviceAccount, setServiceAccount] = useState("");
  // const [cluster, setCluster] = useState("");
  // const [email, setEmail] = useState("");
  // const [showForm, setShowForm] = useState(false);
  //
  // const requestSearch = (searchedVal) => {
  //   const filteredRows = originalRows.filter((row) => {
  //     return row.name.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  //   setRows(filteredRows);
  // };
  //
  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };
  //
  // const handleCloseClick = () => {
  //   setShowForm(false);
  // };
  //
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  //
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  //
  // const handleCellClick = (row) => {
  //   console.log(
  //       "cell clicked " + row.name + " " + row.cluster + " " + row.email
  //   );
  //   setName(row.name);
  //   setCluster(row.cluster);
  //   setEmail(row.email);
  //   setServiceAccount(row.serviceAccount);
  //   setShowForm(true);
  // };

  const classes = useStyles();

  return (
    <>
      <Paper className="all-div-prod" elevation={0}>
        <Box m={2} pt={3}>
          {/*<SearchBar*/}
          {/*  value={searched}*/}
          {/*  onChange={(searchVal) => requestSearch(searchVal)}*/}
          {/*  onCancelSearch={() => cancelSearch()}*/}
          {/*  style={{*/}
          {/*    width: "150px",*/}
          {/*    marginRight: "1400px",*/}
          {/*    border: "1px solid rgb(211,211,211)",*/}
          {/*  }}*/}
          {/*/>*/}
          <Box my={4} py={3}>
            <Paper>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {props.tableHeaders.map((tableHeader) => (
                        <TableCell align="right">{tableHeader}</TableCell>
                      ))}
                      {/*<TableCell>{props.tableHeaders[0]}</TableCell>*/}
                      {/*<TableCell align="right">*/}
                      {/*  {props.tableHeaders[1]}*/}
                      {/*</TableCell>*/}
                      {/*<TableCell align="right">*/}
                      {/*  {props.tableHeaders[2]}*/}
                      {/*</TableCell>*/}
                      {/*<TableCell align="right">*/}
                      {/*  {props.tableHeaders[3]}*/}
                      {/*</TableCell>*/}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows?.map((row, index) => (
                      <TableRow
                        key={row.name}
                        // onClick={() => {
                        //   handleCellClick(row);
                        // }}
                      >
                        {/*{props.row.map((tableCell) => (*/}
                        {/*  <TableCell align="right">{tableCell}</TableCell>*/}
                        {/*))}*/}
                        <TableCell align="right" component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">
                          {row.serviceAccount}
                        </TableCell>
                        <TableCell align="right">{row.cluster}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/*<TablePagination*/}
                {/*  rowsPerPageOptions={[5, 10, 25]}*/}
                {/*  component="div"*/}
                {/*  count={rows.length}*/}
                {/*  rowsPerPage={rowsPerPage}*/}
                {/*  page={page}*/}
                {/*  onChangePage={handleChangePage}*/}
                {/*  onChangeRowsPerPage={handleChangeRowsPerPage}*/}
                {/*/>*/}
              </TableContainer>
            </Paper>
          </Box>
        </Box>
        {/*<Grid item xs={8} sm={8} md={8}>*/}
        {/*  {showForm ? (*/}
        {/*    <div className="display-form">*/}
        {/*      <Grid container>*/}
        {/*        <Grid item xs={12} sm={12} md={12}>*/}
        {/*          <Card className="root">*/}
        {/*            /!*<CardHeader color="success" className="cardHeaderIcon">*!/*/}
        {/*            /!*  <div className="create-request-logo" />*!/*/}
        {/*            /!*</CardHeader>*!/*/}
        {/*            /!*<CardBody>*!/*/}
        {/*            <IconButton*/}
        {/*              style={{*/}
        {/*                marginLeft: "620px",*/}
        {/*                marginTop: "0px",*/}
        {/*                marginRight: "0px",*/}
        {/*              }}*/}
        {/*              className="close"*/}
        {/*              onClick={() => {*/}
        {/*                handleCloseClick();*/}
        {/*              }}*/}
        {/*            >*/}
        {/*              <CloseIcon />*/}
        {/*            </IconButton>*/}
        {/*            <Box>*/}
        {/*              <Typography variant="h6">*/}
        {/*                <div style={{ padding: "0.4em 0" }}>*/}
        {/*                  Team Information*/}
        {/*                </div>*/}
        {/*              </Typography>*/}
        {/*              <FormControl className="input-team-type"></FormControl>*/}
        {/*              <Grid container>*/}
        {/*                <Grid item xs={4}>*/}
        {/*                  <div>Team Name</div>*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={8}>*/}
        {/*                  <TextField value={name} />*/}
        {/*                </Grid>*/}
        {/*              </Grid>*/}
        {/*              <Grid container>*/}
        {/*                <Grid item xs={4}>*/}
        {/*                  <div>Service Account</div>*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={8}>*/}
        {/*                  <TextField value={serviceAccount} />*/}
        {/*                </Grid>*/}
        {/*              </Grid>*/}
        {/*              <Grid container>*/}
        {/*                <Grid item xs={4}>*/}
        {/*                  <div>Onboarded-Environments</div>*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={8}>*/}
        {/*                  <TextField value={cluster} />*/}
        {/*                </Grid>*/}
        {/*              </Grid>*/}
        {/*              <Grid container>*/}
        {/*                <Grid item xs={4}>*/}
        {/*                  <div>Email</div>*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={8}>*/}
        {/*                  <TextField value={email} />*/}
        {/*                </Grid>*/}
        {/*              </Grid>*/}
        {/*              <Grid container>*/}
        {/*                <Grid item xs={4}>*/}
        {/*                  <div>Team members</div>*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={8}>*/}
        {/*                  <TextField value="Nanayakkara Sanadamini" />*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={4}>*/}
        {/*                  <div></div>*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={8}>*/}
        {/*                  <TextField value="Fernando Pimal" />*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={4}>*/}
        {/*                  <div></div>*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={8}>*/}
        {/*                  <TextField value="Silva Mel" />*/}
        {/*                </Grid>*/}
        {/*              </Grid>*/}
        {/*              <Grid container>*/}
        {/*                <Grid item xs={4}>*/}
        {/*                  <div>Description</div>*/}
        {/*                </Grid>*/}
        {/*                <Grid item xs={8}>*/}
        {/*                  <TextField value="Onboard to the ETP Team" />*/}
        {/*                </Grid>*/}
        {/*              </Grid>*/}
        {/*            </Box>*/}
        {/*            <Button variant="contained" color="default">*/}
        {/*              Submit Request*/}
        {/*            </Button>*/}
        {/*          </Card>*/}
        {/*        </Grid>*/}
        {/*      </Grid>*/}
        {/*    </div>*/}
        {/*  ) : null}*/}
        {/*</Grid>*/}
      </Paper>
    </>
  );
}

// .slice(
//   page * rowsPerPage,
//   page * rowsPerPage + rowsPerPage
// )
