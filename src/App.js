
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import AddProduct from './components/Admin/AddProduct';
import ManageProduct from './components/Admin/ManageProduct';

function App() {
  return (
    <div className="App">
          <Router>
      <div>
      <Header></Header>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/AddProduct">
          <AddProduct />
          </Route>
          <Route path="/ManageProduct">
          <ManageProduct />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
