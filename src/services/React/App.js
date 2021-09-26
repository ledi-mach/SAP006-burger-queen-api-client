import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../../pages/Login/index.js';
import { Register } from '../../pages/Register/index.js';
import { Attendance } from '../../pages/Atendimento/index.js';
import { PageNotFound } from '../../pages/PageNotFound/index.js';
import { Cozinha } from '../../pages/Cozinha/index.js';
import { Roles } from '../../pages/Roles/index.js';
import { Menu } from '../../pages/Menu/index.js';
import PrivateRoute from "./router";
import { isAuthenticated } from './auth.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}>
          {isAuthenticated
            ? <Redirect to="/menu" />
            || <Redirect to="/roles" />
            || <Redirect to="/cozinha" />
            : <Login />
          }
        </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute component={Roles} path="/roles" />
        <PrivateRoute component={Menu} path="/menu" />
        <PrivateRoute component={Cozinha} path="/cozinha" />
        <PrivateRoute component={Attendance} path="/atendimento" />
        <Route path='*' exact={true} component={PageNotFound} />
        <Route path="/pagenotfound" component={PageNotFound} />
      </Switch>
    </BrowserRouter >
  )
}
export default App;