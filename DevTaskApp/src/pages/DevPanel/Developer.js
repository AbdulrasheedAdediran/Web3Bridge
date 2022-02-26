import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DevLayout from "../DevPanel/DevLayout";
import DevDashboard from "../DevPanel/DevDashboard/Index";
import Messages from "../DevPanel/Messages/Index";
import Tasks from "../DevPanel/Tasks/Index";
import History from "../../pages/AdminPanel/History/Index";
import Setting from "../../pages/AdminPanel/Setting/Index";

const DevDashboardRoute = () => {
  return (
    <Switch>
      <Route exact={true} path="/developer" component={DevDashboard} />
      <Route exact={true} path="/developer/messages" component={Messages} />
      <Route exact={true} path="/developer/tasks" component={Tasks} />
      <Route exact={true} path="/developer/history" component={History} />
      <Route exact={true} path="/developer/setting" component={Setting} />
    </Switch>
  );
};

function Developer() {
  return (
    <Router>
      <DevLayout>
        <DevDashboardRoute />
      </DevLayout>
    </Router>
  );
}

export default Developer;
