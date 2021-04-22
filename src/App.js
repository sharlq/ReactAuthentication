import React from "react"
import SignUp from "./components/signup"
import { AuthProvider } from "./context/authcontext"
function App() {
  return (
    <AuthProvider>
      <SignUp />
    </AuthProvider>
  );
}

export default App;
