import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Dashboard from "../AdminPanel/Dashboard/Index";
import Projects from "../AdminPanel/Projects/Index";
import Messages from "../AdminPanel/Messages/Index";
import Setting from "../AdminPanel/Setting/Index";
import History from "../AdminPanel/History/Index";
import Tasks from "../AdminPanel/Dashboard/Tasks/Index";

const DashBoardRoute = () => {
  return (
    <Switch>
      <Route exact={true} path="/admin" component={Dashboard} />
      <Route exact={true} path="/admin/project" component={Projects} />
      <Route exact={true} path="/admin/project/tasks" component={Tasks} />
      <Route exact={true} path="/admin/messages" component={Messages} />
      <Route exact={true} path="/admin/history" component={History} />
      <Route exact={true} path="/admin/setting" component={Setting} />
    </Switch>
  );
};

function Admin() {
  return (
    <Router>
      <AdminLayout>
        <DashBoardRoute />
      </AdminLayout>
    </Router>
  );
}
export default Admin;
