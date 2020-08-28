import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MultCheck from './MultipleSelect';
import { TextField } from '@material-ui/core';
import './Table.css';
import EnhancedTableHead from './EnhanceTableHead';
import Row from './Row';





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
  return order === 'desc'
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

export default function ColTable({covid,column}) {
    const classes = useRowStyles();
    const [search,setSearch] = useState('');
    const filterdata = covid.filter(data1 =>{
        return data1.country.toLowerCase().includes(search.toLowerCase() )
    })
    const [header,setHeader] = useState([]);
    const static_header=['cases','active','recovered','deaths'];
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('cases');

    const [headerId,setHeaderId] = useState([]);
    const static_headerId=['cases','active','recovered','deaths'];

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'desc';
      setOrder(isAsc ? 'asc' : 'desc');
      setOrderBy(property);
    };
    
    const headers = (col) =>{
      setHeaderId(col);
      setHeader(col);
    }
  return (
    <div>
      <div className="Multi_check">
        <TextField className={classes.root}  variant="outlined"  placeholder="Search for countries..." value={search} onChange={e => setSearch(e.target.value)} />
        <MultCheck column={column} cols={headers} variant="outlined" className={classes.root}/>
      </div>
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader aria-label="collapsible table sticky table" >
        <TableHead>
          <TableRow>
            <TableCell className="table_data"/>
            <TableCell className="table_data">FLAG</TableCell>
            <TableCell className="table_data">COUNTRY</TableCell>
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={[...static_header,...header]}
              headCellsId={[...static_headerId,...headerId]}
            />
            {/* {
            [...static_header,...header].map((head)=>(
              <TableCell align="right">{head.toUpperCase()}</TableCell>
            ))} */}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(filterdata,getComparator(order,orderBy)).map((row,index) => (
            <Row key={index} row={row} head={[...static_header,...header]} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}
