/*function App() {
 return (
   <div className="App">
     <h1>Hello world</h1>
   </div>
 );
}

export default App; */

import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './pages/Login/index.js';
import { Register } from './pages/Register/index.js';
import { Attendance } from './pages/Atendimento/index.js';
import { Menu } from './pages/Menu/index.js';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/atendimento" component={Attendance} />
      <Route path="/menu" component={Menu} />

    </BrowserRouter>

  )
}

export default App;