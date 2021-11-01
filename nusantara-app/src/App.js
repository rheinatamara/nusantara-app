import {

  Switch,
  Route,

} from "react-router-dom";
import './index.css';
import './main.scss'
import Home from "./views/Home";
import Login from "./views/Login";
function App() {
  return (
    <Switch>
       <Route path="/login">
            <Login />
        </Route>
       <Route path="/">
            <Home />
        </Route>
    </Switch>
  );
}

export default App;
