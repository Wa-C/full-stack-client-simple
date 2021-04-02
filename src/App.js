
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name : '',
    newUser: false,
    email: '',
    password: '',
    photo: '',
    error:'',
    success: false
  });
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
      <div>
      <Header></Header>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <PrivateRoute exact path="/Admin">
            <Admin />
          </PrivateRoute>
          <Route exact path="/AddProduct">
          <AddProduct />
          </Route>
          <Route exact path="/ManageProduct">
          <ManageProduct />
          </Route>
          <Route exact path="/Login">
          <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>

          <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>
          
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
