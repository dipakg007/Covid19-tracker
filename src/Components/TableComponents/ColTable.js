import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MultCheck from './MultipleSelect';
import { Avatar } from '@material-ui/core';
import './Table.css';
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  container:{
      maxHeight: 700,
  },
});
function Row({key,row,head}) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right"><Avatar src={row.countryInfo.flag} alt={row.country}/></TableCell>
        <TableCell component="th" scope="row">{row.country}</TableCell>
        
        {head.map((name)=>(
          <TableCell align="right">{row[name]}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={head.length+3}>
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


export default function ColTable({covid,sear,column}) {
    const classes = useRowStyles();
    const filterdata = covid.filter(data1 =>{
        return data1.country.toLowerCase().includes(sear.toLowerCase() )
    })
    const [header,setHeader] = useState(['cases','active','recovered','deaths']);
    const headers = (col) =>{
      const arr=[...header,...col];
      setHeader(arr);
    }
  return (
    <div>
      <div className="Multi_check"><MultCheck column={column} cols={headers}/></div>
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader aria-label="collapsible table sticky table" >
        <TableHead>
          <TableRow>
            <TableCell className="table_data"/>
            <TableCell className="table_data">Falg</TableCell>
            <TableCell className="table_data">Country</TableCell>
            {header.map((head)=>(
              <TableCell align="right">{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filterdata.map((row,index) => (
            <Row key={index} row={row} head={header} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}
