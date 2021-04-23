import React from "react"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SignUp from "./components/signup"
import LogIn from "./components/login"
import Dashboard from "./components/dashboard"
import { AuthProvider } from "./context/authcontext"
import PrivateRoute from "./components/PrivetRout"
import PasswordResst from "./components/PasswordReset"
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
         <PrivateRoute exact path="/" component={Dashboard} />  
        {/*remmeber we use exact so it doesnt render the component in any url that has / but only but just the one with the exact value of / */}
        <Route exact path="/login" component={LogIn} /> 
        <Route path="/signup" component={SignUp} />
        <Route path="/resetPassword" component={PasswordResst} />

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
