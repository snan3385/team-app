import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import {
  FormControl,
  Typography,
  IconButton,
  TablePagination,
  Grid,
} from "@material-ui/core";

import "./AllUser.css";
import SearchBar from "material-ui-search-bar";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";

import AddUser from "./AddUser";

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
    lastModDate: "22/5/2022",
  },
  {
    name: "Team Canada",
    email: "sa_canada",
    syscoId: "dev",
    lastModDate: "21/5/2022",
  },
  {
    name: "Talent aqusition",
    email: "sa_talent",
    syscoId: "sandbox",
    lastModDate: "3/4/2021",
  },
];

export default function AllUsers() {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const [name, setName] = useState("");
  const [lastModDate, setLastModDate] = useState("");
  const [syscoId, setSyscoId] = useState("");
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const classes = useStyles();

  const handleCellClick = (row) => {
    setName(row.name);
    setSyscoId(row.syscoId);
    setLastModDate(row.lastModDate);
    setEmail(row.email);
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onClickShowAddUserForm = () => {
    setShowAddUserForm(true);
  };

  const handleCloseAddUserForm = (show) => {
    setShowAddUserForm(show);
  };

  const addUser = (newName, newSyscoId, newEmail) => {
    newName
      ? setRows(
          rows.concat({
            name: newName,
            syscoId: newSyscoId,
            email: newEmail,
          })
        )
      : setRows(rows);
    setShowAddUserForm(false);
  };

  return (
    <>
      <Paper className="all-div" elevation={0}>
        <Box m={2} pt={3}>
          <Grid container className={classes.topGridContainer}>
            <Grid item xs={11}>
              <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
                style={{
                  width: "150px",
                  marginRight: "1400px",
                  border: "1px solid rgb(211,211,211)",
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={onClickShowAddUserForm}>
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Box my={4} py={3}>
            <Paper>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right">Sysco ID</TableCell>
                      <TableCell align="right">Last Modified Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => (
                        <TableRow
                          key={row.name}
                          onClick={() => {
                            handleCellClick(row);
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.email}</TableCell>
                          <TableCell align="right">{row.syscoId}</TableCell>
                          <TableCell align="right">{row.lastModDate}</TableCell>
                          {/*<TableCell align="right">{row.age}</TableCell>*/}
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableContainer>
            </Paper>
          </Box>
        </Box>

        {/*<Grid item xs={8} sm={8} md={8}>*/}
        {showAddUserForm ? (
          <AddUser
            handleCloseAddUserForm={() => handleCloseAddUserForm()}
            onSubmit={addUser}
          />
        ) : null}
        {/*</Grid>*/}
        {/*<Grid item xs={8} sm={8} md={8}>*/}
        {showForm ? (
          <div className="display-form">
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <CustomCard className="root-all-user">
                  <CustomCardHeader className="card-header-all-user">
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography variant="h6">
                          <div style={{ padding: "0.4em 0" }}>
                            User Information
                          </div>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <IconButton
                          // style={{
                          //   marginLeft: "520px",
                          //   marginTop: "0px",
                          //   marginRight: "0px",
                          // }}
                          className="close-user"
                          onClick={() => {
                            handleCloseClick();
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CustomCardHeader>
                  <Box>
                    <FormControl className="input-team-type"></FormControl>
                    <Grid container>
                      <Grid item xs={4}>
                        <div>Name</div>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField value={name} />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={4}>
                        <div>Email</div>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField value={email} />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={4}>
                        <div>Sysco ID</div>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField value={syscoId} />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={4}>
                        <div>Last Modified Date</div>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField value={lastModDate} />
                      </Grid>
                    </Grid>
                  </Box>
                </CustomCard>
              </Grid>
            </Grid>
          </div>
        ) : null}
        {/*</Grid>*/}
      </Paper>
    </>
  );
}
