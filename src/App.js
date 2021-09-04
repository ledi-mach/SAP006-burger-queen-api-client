 /*function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App; */

import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home/index.js';
import { Register } from './pages/Register/index.js';
import { Attendance } from './pages/Atendimento/index.js';
import { Menu } from './pages/Menu/index.js';
import "./App.css";

function App() {
return (
<BrowserRouter>
<Route path="/" exact component={Home} />
<Route path="/register" component={Register} />
<Route path="/atendimento" component={Attendance} />
<Route path="/menu" component={Menu} />

</BrowserRouter>

)
}

export default App;