import logo from './logo.svg';
import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from './Components/AddProduct/AddProduct';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import CheckOut from './Components/CheckOut/CheckOut';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';
import Header from './Components/Headers/Headers';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    
       <Router>
       <Header></Header>
        <Switch>
          <PrivateRoute path="/addProduct">
         <AddProduct></AddProduct>
          </PrivateRoute>

        

          <PrivateRoute path="/checkout/:_id">
       <CheckOut></CheckOut>
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Order></Order>
          </PrivateRoute>

          <Route path="/signin">
        <SignIn></SignIn>
          </Route>

          <Route  path="/home">
           <Home></Home>
          </Route>
         
          <Route exact path="/">
           <Home></Home>
          </Route>
        </Switch>
  
    </Router>

    </UserContext.Provider>

  );
}

export default App;
