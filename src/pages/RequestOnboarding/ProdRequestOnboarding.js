import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import {
  FormControl,
  Typography,
  Button,
  IconButton,
  TablePagination,
  Grid,
  Card,
} from "@material-ui/core";

// import "./ProdRequestOnboarding.css";
import CustomTable from "../../components/CustomTable";
import SearchBar from "material-ui-search-bar";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
// import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const componentOriginalRows = [
  {
    name: "Enterprise Platform",
    serviceAccount: "sa_epe",
    cluster: "sandbox",
    email: "Kevin@ss.com",
  },
  {
    name: "Team Canada",
    serviceAccount: "sa_canada",
    cluster: "dev",
    email: "Nanayakkara@ss.com",
  },
  {
    name: "Talent aqusition",
    serviceAccount: "sa_talent",
    cluster: "sandbox",
    email: "Luvi@ss.com",
  },
];

const comTableHeaders=["Team Name","Service Account","Onboarded Environments","Email"]

export default function ProdRequestOnboarding() {
  const [originalRows,setOriginalRows]=useState(componentOriginalRows);
  const [tableHeaders,setTableHeaders]=useState(comTableHeaders);
  // const [rows, setRows] = useState(originalRows);
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
  // const classes = useStyles();
  //
  // const handleCellClick = (row) => {
  //   console.log(
  //     "cell clicked " + row.name + " " + row.cluster + " " + row.email
  //   );
  //   setName(row.name);
  //   setCluster(row.cluster);
  //   setEmail(row.email);
  //   setServiceAccount(row.serviceAccount);
  //   setShowForm(true);
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
  return (
    <>
      <CustomTable originalRows={originalRows} tableHeaders={tableHeaders} />
    </>
  );
}
