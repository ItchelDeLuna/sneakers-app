import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import SignUp from './Components/SignUp.js';
import Women from './Components/Women.js';
import Mens from './Components/Mens.js';
import DescProm from './Components/DescProm.js';
import Cart from './Components/Cart.js';
import TermCond from './Components/TermCond.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/women" component={Women}></Route>
          <Route path="/mens" component={Mens}></Route>
          <Route path="/descprom" component={DescProm}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/termcond" component={TermCond}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
