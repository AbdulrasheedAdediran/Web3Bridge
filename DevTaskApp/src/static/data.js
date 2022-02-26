import "../styles/Tasks/Task.css";

import {
  faQrcode,
  faHistory,
  faCommentDots,
  faCog,
  faThList,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

export const navigation = [
  {
    value: "Dashboard",
    link: "/admin",
    icon: faQrcode,
  },
  {
    value: "Messages",
    link: "/admin/messages",
    icon: faCommentDots,
  },
  {
    value: "Assign Project",
    link: "/admin/project",
    icon: faThList,
  },
  {
    value: "History",
    link: "/admin/history",
    icon: faHistory,
  },
  {
    value: "Setting",
    link: "/admin/setting",
    icon: faCog,
  },
];

export const dev = [
  {
    value: "Dashboard",
    link: "/developer",
    icon: faQrcode,
  },
  {
    value: "Messaging",
    link: "/developer/messages",
    icon: faCommentDots,
  },
  {
    value: "Task",
    link: "/developer/tasks",
    icon: faTasks,
  },
  {
    value: "History",
    link: "/developer/history",
    icon: faHistory,
  },
  {
    value: "Setting",
    link: "/developer/setting",
    icon: faCog,
  },
];

// TABLES

export const data = [
  {
    Id: 1,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Submitted: <p className="task__deadline">5th November</p>,
    Assigned: <p className="task__status">Eric</p>,
  },
  {
    Id: 2,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Submitted: <p className="task__deadline">5th November</p>,
    Assigned: <p className="task__status">John</p>,
  },
  {
    Id: 3,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Submitted: <p className="task__deadline">5th November</p>,
    Assigned: <p className="task__status">Nuel Geek</p>,
  },
  {
    Id: 4,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Submitted: <p className="task__deadline">5th November</p>,
    Assigned: <p className="task__status">Eric</p>,
  },
  {
    Id: 5,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Submitted: <p className="task__deadline">5th November</p>,
    Assigned: <p className="task__status">Abdul</p>,
  },
  {
    Id: 6,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Submitted: <p className="task__deadline">5th November</p>,
    Assigned: <p className="task__status">Rita Mariah</p>,
  },
  {
    Id: 7,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Submitted: <p className="task__deadline">5th November</p>,
    Assigned: <p className="task__status">Eniola</p>,
  },
];
export const columns = [
  {
    title: "Id",
    field: "Id",
  },
  {
    title: "Tasks",
    field: "Tasks",
  },
  {
    title: "Status",
    field: "Status",
  },
  {
    title: "Priority",
    field: "Priority",
  },
  {
    title: "Submitteds",
    field: "Submitted",
  },
  {
    title: "Assigned",
    field: "Assigned",
  },
];



// TASK developers

export const taskRow = [
  {
    Id: 1,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Deadline: <p className="task__deadline">5th November</p>,
    Submit: <button className="task__btn">Submit</button>
  },
  {
    Id: 2,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Deadline: <p className="task__deadline">5th November</p>,
    Submit: <button className="task__btn">Submit</button>
  },
  {
    Id: 3,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Deadline: <p className="task__deadline">5th November</p>,
    Submit: <button className="task__btn">Submit</button>
  },
  {
    Id: 4,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Deadline: <p className="task__deadline">5th November</p>,
    Submit: <button className="task__btn">Submit</button>
  },
  {
    Id: 5,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Deadline: <p className="task__deadline">5th November</p>,
    Submit: <button className="task__btn">Submit</button>
  },
  {
    Id: 6,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Deadline: <p className="task__deadline">5th November</p>,
    Submit: <button className="task__btn">Submit</button>
  },
  {
    Id: 7,
    Tasks: <p>Designing a landing page</p>,
    Status: <p className="task__status">Finished</p>,
    Priority: <p className="task__priority">High</p>,
    Deadline: <p className="task__deadline">5th November</p>,
    Submit: <button className="task__btn">Submit</button>
  },
];
export const taskColumns = [
  {
    title: "Id",
    field: "Id",
  },
  {
    title: "Tasks",
    field: "Tasks",
  },
  {
    title: "Status",
    field: "Status",
  },
  {
    title: "Priority",
    field: "Priority",
  },
  {
    title: "Deadline",
    field: "Deadline",
  },
  {
    title: "Submit",
    field: "Submit",
  },
];