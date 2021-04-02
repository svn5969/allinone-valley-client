import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../images/all in one vv.png'

const Header = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);

console.log(loggedInUser);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="muted" variant="primary">
                <Navbar.Brand ><img style={{height:'50px',width:'70px',marginLeft:'60px'}} src={logo}></img></Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: "skyblue"}}aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/addProduct">Admin</Nav.Link>
                        <Nav.Link href="/orders">Order</Nav.Link>
                        <Nav.Link href="/signin">
                        {loggedInUser.userName ?loggedInUser.userName:<button className="btn btn-primary btn-sm">Log In</button>}


      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;