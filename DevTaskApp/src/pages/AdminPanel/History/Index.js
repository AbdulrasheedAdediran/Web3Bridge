

import React, {  useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import "../../../styles/Tasks/Task.css";
import "../../../styles/dashboardStyle/Dashboard.css";
import "../../../styles/history/History.css";
import { data} from "../../../static/data";

export default function Index() {
  useEffect(() => {
    window.scroll(0, 0)
  },
    // eslint-disable-next-line 
    [])


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

 


  return (
    <div className="table">
      <div>
        <TableContainer paging="true" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Tasks</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Priority</TableCell>
                <TableCell align="right">Submitted</TableCell>
                <TableCell align="right">Assigned</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data) => 
                  (
                    <TableRow
                      key={data.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {data.Id}
                      </TableCell>
                      <TableCell align="right">{data.Tasks}</TableCell>
                      <TableCell align="right">{data.Status}</TableCell>
                      <TableCell align="right">{data.Priority}</TableCell>
                      <TableCell align="right">{data.Submitted}</TableCell>
                      <TableCell align="right">{data.Assigned}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
           
          </Table>
          <TableFooter>
            <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            </TableFooter>
        </TableContainer>
      </div>
    </div>
  );
}




