import logo from './logo.svg';
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

function App() {
  return (
  
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addProduct">Add Product</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/addProduct">
         <AddProduct></AddProduct>
          </Route>
         
          <Route exact path="/">
           <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
