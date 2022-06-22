import Box from "@material-ui/core/Box";
import SearchBar from "material-ui-search-bar";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { TablePagination } from "@material-ui/core";
import React, { useState } from "react";
import "../../pages/RequestOnboarding/ProdRequestOnboarding.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";

import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const { tableHeaderColor } = props;
  const [rows, setRows] = useState(props.originalRows);
  const [searched, setSearched] = useState("");
  // const [name, setName] = useState("");
  // const [serviceAccount, setServiceAccount] = useState("");
  // const [cluster, setCluster] = useState("");
  // const [email, setEmail] = useState("");
  // const [showForm, setShowForm] = useState(false);
  //
  const requestSearch = (searchedVal) => {
    const filteredRows = props.originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  //
  // const handleCloseClick = () => {
  //   setShowForm(false);
  // };
  //
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
        {/*<div>*/}
        <Box m={2} pt={3}>
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
          {/*<Box my={4} py={3}>*/}
          {/*<Paper>*/}
          <div className={classes.tableResponsive}>
            <TableContainer>
              {/*<Table className={classes.table} aria-label="simple table">*/}
              <Table className={classes.table}>
                <TableHead
                  className={classes[tableHeaderColor + "TableHeader"]}
                >
                  <TableRow className={classes.tableHeadRow}>
                    {props.tableHeaders.map((tableHeader) => (
                      // <TableCell align="right">{tableHeader}</TableCell>
                      <TableCell
                        className={
                          classes.tableCell + " " + classes.tableHeadCell
                        }
                      >
                        {tableHeader}
                      </TableCell>
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
                  {rows
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row, index) => (
                      <TableRow
                        className={classes.tableBodyRow}
                        key={row.name}
                        // onClick={() => {
                        //   handleCellClick(row);
                        // }}
                      >
                        {Object.keys(row).map((tableCell, i) => (
                          // <TableCell align="right" key={i}>
                          <TableCell className={classes.tableCell} key={i}>
                            {row[tableCell]}
                          </TableCell>
                        ))}
                        {/*<TableCell align="right" component="th" scope="row">*/}
                        {/*  {row.name}*/}
                        {/*</TableCell>*/}
                        {/*<TableCell align="right">*/}
                        {/*  {row.serviceAccount}*/}
                        {/*</TableCell>*/}
                        {/*<TableCell align="right">{row.cluster}</TableCell>*/}
                        {/*<TableCell align="right">{row.email}</TableCell>*/}
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
          </div>
          {/*</Paper>*/}
        </Box>
        {/*</Box>*/}
      </Paper>
      {/*</div>*/}
    </>
  );
}
