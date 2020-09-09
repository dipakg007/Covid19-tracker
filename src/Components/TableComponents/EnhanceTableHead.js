import React from 'react'
import {TableSortLabel, TableCell } from '@material-ui/core';

function EnhanceTableHead(props) {
    const {  order, orderBy, onRequestSort ,headCells,headCellsId} = props;
    const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
    };

  return (
        headCells.map((headCell,index) => (
          <TableCell
            key={headCellsId[index]}
            align="right"
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCellsId[index] ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCellsId[index]}
              direction={orderBy === headCellsId[index] ? order : 'asc'}
              onClick={createSortHandler(headCellsId[index])}
            >
              {headCell.toUpperCase()}
            </TableSortLabel>
          </TableCell>
        ))
  );
}

export default EnhanceTableHead
