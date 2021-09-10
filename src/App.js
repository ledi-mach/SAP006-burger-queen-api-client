import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login/index.js';
import { Register } from './pages/Register/index.js';
import { Attendance } from './pages/Atendimento/index.js';
import { Menu } from './pages/Menu/index.js';
import PrivateRoute from "./router";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute component={Menu} path="/menu" />
        <PrivateRoute component={Attendance} path="/atendimento" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;