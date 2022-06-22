import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { Modal, TablePagination } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
  input: {
    width: 130,
    height: 40,
  },
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    marginLeft: "300px",
    marginTop: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const createData = (
  teamName,
  serviceAccount,
  distributionList,
  lastModDate
) => ({
  id: teamName.replace(" ", "_"),
  teamName,
  serviceAccount,
  distributionList,
  lastModDate,
  isEditMode: false,
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

export default function EditableTeam() {
  const [searched, setSearched] = useState("");
  const [originalRows, setOriginalRows] = useState([
    createData("Enterprise Platform", "sa_epe", "sandbox", "3/4/2021"),
    createData("Team Canada", "sa_canada", "dev", "2/4/2022"),
    createData("Talent aqusition", "sa_talent", "sandbox", "1/2/2015"),
  ]);

  const [rows, setRows] = React.useState([
    createData("Enterprise Platform", "sa_epe", "sandbox", "3/4/2021"),
    createData("Team Canada", "sa_canada", "dev", "2/4/2022"),
    createData("Talent aqusition", "sa_talent", "sandbox", "1/2/2015"),
  ]);
  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.teamName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
    // eslint-disable-next-line no-console
    console.log("okkk" + filteredRows.length);
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

  const [members, setMembers] = useState([
    { name: "Sandamini", email: "nanayakkara@sysco.com", syscoId: "snan3487" },
    { name: "Sandamini", email: "nanayakkara@sysco.com", syscoId: "snan3487" },
    { name: "Sandamini", email: "nanayakkara@sysco.com", syscoId: "snan3487" },
  ]);
  const [open, setOpen] = React.useState(false);
  const [clickedTeamName, setClickedTeamName] = useState("");
  const handleOpen = (row) => {
    setOpen(true);
    setClickedTeamName(row.teamName);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className="all-div-table" elevation={0}>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        style={{
          // backgroundColor: "#2eb82e",
          width: "150px",
          marginRight: "1400px",
          border: "1px solid rgb(211,211,211)",
        }}
      />
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            {/*<TableCell align="left" />*/}
            <TableCell align="left">Team Name</TableCell>
            <TableCell align="left">Service Account</TableCell>
            <TableCell align="left">Distribution List</TableCell>
            <TableCell align="left">Last Modified Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => {
                handleOpen(row);
              }}
            >
              <CustomTableCell {...{ row, name: "teamName", onChange }} />
              <CustomTableCell {...{ row, name: "serviceAccount", onChange }} />
              <CustomTableCell
                {...{ row, name: "distributionList", onChange }}
              />
              <CustomTableCell {...{ row, name: "lastModDate", onChange }} />
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
      <div>
        <Modal
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div className={classes.paper}>
            <h2>{clickedTeamName}</h2>
            <h3>Members' Details</h3>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Sysco ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.map((member, index) => (
                  <TableRow key={member.syscoId}>
                    <TableCell component="th" scope="row">
                      {member.name}
                    </TableCell>
                    <TableCell align="left">{member.email}</TableCell>
                    <TableCell align="left">{member.syscoId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Modal>
      </div>
    </Paper>
  );
}
