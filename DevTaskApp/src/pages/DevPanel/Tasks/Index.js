// import React,{ useState, useEffect} from "react";
// import "../../../styles/Tasks/Task.css";
// import Avatar from "../../../assets/avatar.svg";
// import "../../../styles/dashboardStyle/Dashboard.css";
// import { DataGrid } from '@mui/x-data-grid';
// import Modal from "../../../components/Modal/Modal";






// function Index() {
// const [show, setShow] = useState(false);
// useEffect(() =>{
//   window.scroll(0,0)
// },
// // eslint-disable-next-line 
// [])

// const showModalHandler = () =>{
//   setShow(!show)
// }


//   const taskRow = [
//     {
//       Id: 1,
//       Tasks: <p>Designing a landing page</p>,
//       Status: <p className="task__status">Finished</p>,
//       Priority: <p className="task__priority">High</p>,
//       Deadline: <p className="task__deadline">5th November</p>,
//       Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
//     },
//     {
//       Id: 2,
//       Tasks: <p>Designing a landing page</p>,
//       Status: <p className="task__status">Finished</p>,
//       Priority: <p className="task__priority">High</p>,
//       Deadline: <p className="task__deadline">5th November</p>,
//       Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
//     },
//     {
//       Id: 3,
//       Tasks: <p>Designing a landing page</p>,
//       Status: <p className="task__status">Finished</p>,
//       Priority: <p className="task__priority">High</p>,
//       Deadline: <p className="task__deadline">5th November</p>,
//       Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
//     },
//     {
//       Id: 4,
//       Tasks: <p>Designing a landing page</p>,
//       Status: <p className="task__status">Finished</p>,
//       Priority: <p className="task__priority">High</p>,
//       Deadline: <p className="task__deadline">5th November</p>,
//       Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
//     },
//     {
//       Id: 5,
//       Tasks: <p>Designing a landing page</p>,
//       Status: <p className="task__status">Finished</p>,
//       Priority: <p className="task__priority">High</p>,
//       Deadline: <p className="task__deadline">5th November</p>,
//       Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
//     },
//     {
//       Id: 6,
//       Tasks: <p>Designing a landing page</p>,
//       Status: <p className="task__status">Finished</p>,
//       Priority: <p className="task__priority">High</p>,
//       Deadline: <p className="task__deadline">5th November</p>,
//       Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
//     },
//     {
//       Id: 7,
//       Tasks: <p>Designing a landing page</p>,
//       Status: <p className="task__status">Finished</p>,
//       Priority: <p className="task__priority">High</p>,
//       Deadline: <p className="task__deadline">5th November</p>,
//       Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
//     },
//   ];
//    const taskColumns = [
//     {
//       title: "Id",
//       field: "Id",
//     },
//     {
//       title: "Tasks",
//       field: "Tasks",
//     },
//     {
//       title: "Status",
//       field: "Status",
//     },
//     {
//       title: "Priority",
//       field: "Priority",
//     },
//     {
//       title: "Deadline",
//       field: "Deadline",
//     },
//     {
//       title: "Submit",
//       field: "Submit",
//     },
//   ];
//   return (
//     <div className="table">
//       <div className="flex-content admin">
//         <div className="user__profile">
//           <div className="avatar-container">
//             <img src={Avatar} alt="avatar" className="avatar" />
//           </div>
//           <p className="user__lr">Welcome, Eric</p>
//         </div>
//       </div>
//       <div>
//         <DataGrid         
//           rows={taskRow}
//           columns={taskColumns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//         />
//         {show && <Modal show={show} onClose={showModalHandler}>
//           <div className="task__modal--details">
//           <form>
//             <div className="form_flex">
//               <div className="item__1">
//             <input type="text" name="link" placeholder="link"/>
//               </div>
//               <div className="item__2">
//             <button className="btn" type="submit">Post</button>
//               </div>
//             </div>
//           </form>
//           </div>
//         </Modal> }
//       </div>
//     </div>
//   );
// }

// export default Index;



import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Modal from "../../../components/Modal/Modal";
import "../../../styles/Tasks/Task.css";
import Avatar from "../../../assets/avatar.svg";
import "../../../styles/dashboardStyle/Dashboard.css";


export default function BasicTable() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scroll(0, 0)
  },
    // eslint-disable-next-line 
    [])
  const showModalHandler = () => {
    setShow(!show)
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = [
    {
      Id: 1,
      Tasks: <p>Designing a landing page</p>,
      Status: <p className="task__status">Finished</p>,
      Priority: <p className="task__priority">High</p>,
      Deadline: <p className="task__deadline">5th November</p>,
      Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
    },
    {
      Id: 2,
      Tasks: <p>Designing a landing page</p>,
      Status: <p className="task__status">Finished</p>,
      Priority: <p className="task__priority">High</p>,
      Deadline: <p className="task__deadline">5th November</p>,
      Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
    },
    {
      Id: 3,
      Tasks: <p>Designing a landing page</p>,
      Status: <p className="task__status">Finished</p>,
      Priority: <p className="task__priority">High</p>,
      Deadline: <p className="task__deadline">5th November</p>,
      Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
    },
    {
      Id: 4,
      Tasks: <p>Designing a landing page</p>,
      Status: <p className="task__status">Finished</p>,
      Priority: <p className="task__priority">High</p>,
      Deadline: <p className="task__deadline">5th November</p>,
      Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
    },
    {
      Id: 5,
      Tasks: <p>Designing a landing page</p>,
      Status: <p className="task__status">Finished</p>,
      Priority: <p className="task__priority">High</p>,
      Deadline: <p className="task__deadline">5th November</p>,
      Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
    },
    {
      Id: 6,
      Tasks: <p>Designing a landing page</p>,
      Status: <p className="task__status">Finished</p>,
      Priority: <p className="task__priority">High</p>,
      Deadline: <p className="task__deadline">5th November</p>,
      Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
    },
    {
      Id: 7,
      Tasks: <p>Designing a landing page</p>,
      Status: <p className="task__status">Finished</p>,
      Priority: <p className="task__priority">High</p>,
      Deadline: <p className="task__deadline">5th November</p>,
      Submit: <button onClick={showModalHandler} className="task__btn">Submit</button>
    },
  ];


  return (
    <div className="table">
      <div className="flex-content admin">
        <div className="user__profile">
          <div className="avatar-container">
            <img src={Avatar} alt="avatar" className="avatar" />
          </div>
          <p className="user__lr">Welcome, Eric</p>
        </div>
      </div>
      <div>
        <TableContainer paging="true" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Tasks</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Priority</TableCell>
                <TableCell align="right">Deadline</TableCell>
                <TableCell align="right">Submit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => 
                  (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.Id}
                      </TableCell>
                      <TableCell align="right">{row.Tasks}</TableCell>
                      <TableCell align="right">{row.Status}</TableCell>
                      <TableCell align="right">{row.Priority}</TableCell>
                      <TableCell align="right">{row.Deadline}</TableCell>
                      <TableCell align="right">{row.Submit}</TableCell>
                    </TableRow>
                  ))}
              {show && <Modal show={show} onClose={showModalHandler}>
                <div className="task__modal--details">
                  <form>
                    <div className="form_flex">
                      <div className="item__1">
                        <input type="text" name="link" placeholder="link" />
                      </div>
                      <div className="item__2">
                        <button className="btn" type="submit">Post</button>
                      </div>
                    </div>
                  </form>
                </div>
              </Modal>}
            </TableBody>
           
          </Table>
          <TableFooter>
            <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
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




