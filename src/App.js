
import {Switch,Route} from "react-router-dom";
import HomePage from 'Pages/HomePage';
import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/login"} component={LoginPage}/>
        <Route exact path={"/register"} component={RegisterPage}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
