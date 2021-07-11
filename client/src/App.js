import './App.css';
import { Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import LogIn from "./pages/SignIn"
import Me from './pages/Me';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <PrivateRoute exact path="/me" component={Me} />
      <Route exact path='/signUp' render={() => <SignUp />} />
      <Route exact path='/' render={() => <LogIn />} />
    </div>
  );
}

export default App;
