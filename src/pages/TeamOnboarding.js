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
import { Box } from "@material-ui/core";
import "./TeamOnboarding.css";
import Sidebar from "../components/Sidebar";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const originalRows = [
  {
    name: "Kevin",
    cluster: "sandbox",
    apikey: 1234524,
    email: "Kevin@ss.com",
    age: 42,
  },
  {
    name: "Nanayakkara",
    cluster: "dev",
    apikey: 6987465,
    email: "Nanayakkara@ss.com",
    age: 34,
  },
  {
    name: "Luvi",
    cluster: "sandbox",
    apikey: 6876244,
    email: "Luvi@ss.com",
    age: 25,
  },
  {
    name: "Abydeera",
    cluster: "sandbox",
    apikey: 9876465,
    email: "Abydeera@ss.com",
    age: 28,
  },
  {
    name: "Harry",
    cluster: "dev",
    apikey: 8476254,
    email: "Harry@ss.com",
    age: 32,
  },
  {
    name: "Charles",
    cluster: "sandbox",
    apikey: 3546274,
    email: "Charles@ss.com",
    age: 43,
  },
];

export default function TeamOnboarding() {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

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

  return (
    <>
      <Sidebar/>
      <Paper className="all-div">
        <Box m={2} pt={3}>
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            style={{ backgroundColor: "#2eb82e" }}
          />
          <Box my={4} py={3}>
            <Paper>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Cluster</TableCell>
                      <TableCell align="right">Api Key</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right">Age</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.cluster}</TableCell>
                        <TableCell align="right">{row.apikey}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
