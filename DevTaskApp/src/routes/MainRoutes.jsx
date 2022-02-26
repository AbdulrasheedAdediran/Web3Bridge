import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AuthContextProvider } from '../store/auth-context';
import Home from '../pages/Home';
import AdminPanel from '../pages/AdminPanel/Admin';
import DeveloperPanel from '../pages/DevPanel/Developer'
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

function MainRoutes() {
    return (
        <AuthContextProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    {/* protected routes */}
                    <Route exact path="/admin" component={AdminPanel} />
                    
                    <Route exact path="/developer" component={DeveloperPanel} />
                </Switch>
            </Router>
        </AuthContextProvider>
    )
}

export default MainRoutes;
