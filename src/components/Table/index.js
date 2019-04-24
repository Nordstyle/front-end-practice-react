import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 340
  }
};

function TableGrid(props) {
  const { classes, usersData, isLoading } = props;
  if (isLoading) return <CircularProgress />;
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Age</TableCell>
          <TableCell align="right">Gender</TableCell>
          <TableCell align="right">Group</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {usersData && usersData.map(item => (
          <TableRow key={item._id}>
            <TableCell>
              {item.firstName} {item.surName}
            </TableCell>
            <TableCell align="right">{item.age}</TableCell>
            <TableCell align="right">{item.gender}</TableCell>
            <TableCell align="right">{item.group}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default withStyles(styles)(TableGrid);