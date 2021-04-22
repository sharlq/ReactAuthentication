import React from "react"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SignUp from "./components/signup"
import LogIn from "./components/login"
import Dashboard from "./components/dashboard"
import { AuthProvider } from "./context/authcontext"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
         <Route exact path="/" component={Dashboard} />  
        {/*remmeber we use exact so it doesnt render the component in any url that has / but only but just the one with the exact value of / */}
        <Route exact path="/login" component={LogIn} /> 
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
