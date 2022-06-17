import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { Box, TablePagination } from "@material-ui/core";
import "./TeamOnboarding.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../data/actions";

import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const originalRows = [
  {
    teamName: "Kevin",
    createdBy: "sandbox",
    lastModDate: 1234524,
    reqState: "Pending",
  },
  {
    teamName: "Nanayakkara",
    createdBy: "dev",
    lastModDate: 6987465,
    reqState: "Pending",
  },
  {
    teamName: "Luvi",
    createdBy: "sandbox",
    lastModDate: 6876244,
    reqState: "Approved",
  },
  {
    teamName: "Abydeera",
    createdBy: "sandbox",
    lastModDate: 9876465,
    reqState: "Pending",
  },
  {
    teamName: "Harry",
    createdBy: "dev",
    lastModDate: 8476254,
    reqState: "Pending",
  },
  {
    teamName: "Charles",
    createdBy: "sandbox",
    lastModDate: 3546274,
    reqState: "Approved",
  },
];

export default function TeamOnboarding() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.teamName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
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

  const api = axios.create({
    baseURL: `https://api-gateway-sbx.sysco.com/event-platform-team-onboarding-api/`,
    headers: {
      // Authorization: "Bearer KXJwrw3JlKDhlPArZALZmrPZ97ju",
      // "Access-Control-Allow-Credentials": "true",
      Authorization: `Bearer 06nTx6555wU1TwnpC1ukKGpby6yN`,
    },
  });

  const getTeams = async () => {
    try {
      let data = await api.get("onboard/teams").then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <>
      <Paper className="all-div-table" elevation={0}>
        <Box m={2} pt={3} pb={0}>
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
          <Box my={4} py={3}>
            <Paper>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Team Name</TableCell>
                      <TableCell align="right">Created By</TableCell>
                      <TableCell align="right">Last Modified Date</TableCell>
                      <TableCell align="right">State</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => (
                        <TableRow key={row.teamName}>
                          <TableCell component="th" scope="row">
                            {row.teamName}
                          </TableCell>
                          <TableCell align="right">{row.createdBy}</TableCell>
                          <TableCell align="right">{row.lastModDate}</TableCell>
                          <TableCell align="right">{row.reqState}</TableCell>
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
            <button onClick={getTeams}>check</button>
            <div>counter : {counter}</div>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>logged : {isLogged.toString()}</div>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
