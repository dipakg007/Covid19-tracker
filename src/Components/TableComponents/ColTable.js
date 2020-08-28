import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MultCheck from "./MultipleSelect";
import { Avatar, TextField } from "@material-ui/core";
import "./Table.css";
import EnhancedTableHead from "./EnhanceTableHead";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  container: {
    maxHeight: 700,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,

    overflow: "hidden",
    top: 20,
    width: 1,
  },
});
function Row({ key, row, head }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">
          <Avatar src={row.countryInfo.flag} alt={row.country} />
        </TableCell>
        <TableCell component="th" scope="row">
          {row.country}
        </TableCell>

        {head.map((name) => (
          <TableCell align="right">{row[name]}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={head.length + 3}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function ColTable({ covid, column }) {
  const classes = useRowStyles();
  const [search, setSearch] = useState("");
  const filterdata = covid.filter((data1) => {
    return data1.country.toLowerCase().includes(search.toLowerCase());
  });
  const [header, setHeader] = useState([]);
  const static_header = ["cases", "active", "recovered", "deaths"];
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("cases");

  const [headerId, setHeaderId] = useState([]);
  const static_headerId = ["cases", "active", "recovered", "deaths"];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "desc";
    setOrder(isAsc ? "asc" : "desc");
    setOrderBy(property);
  };

  const headers = (col) => {
    setHeaderId(col);
    setHeader(col);
  };
  return (
    <div>
      <div className="Multi_check">
        <TextField
          className={classes.root}
          variant="outlined"
          placeholder="Search for countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MultCheck
          column={column}
          cols={headers}
          variant="outlined"
          className={classes.root}
        />
      </div>
      <TableContainer component={Paper} className={classes.container}>
        <Table stickyHeader aria-label="collapsible table sticky table">
          <TableHead>
            <TableRow>
              <TableCell className="table_data" />
              <TableCell className="table_data">FLAG</TableCell>
              <TableCell className="table_data">COUNTRY</TableCell>
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                headCells={[...static_header, ...header]}
                headCellsId={[...static_headerId, ...headerId]}
              />
              {/* {
            [...static_header,...header].map((head)=>(
              <TableCell align="right">{head.toUpperCase()}</TableCell>
            ))} */}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(filterdata, getComparator(order, orderBy)).map(
              (row, index) => (
                <Row
                  key={index}
                  row={row}
                  head={[...static_header, ...header]}
                />
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
