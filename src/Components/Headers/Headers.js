import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);

console.log(loggedInUser);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="muted" variant="primary">
                <Navbar.Brand >AllinOne Valley</Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: "skyblue"}}aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/addProduct">Admin</Nav.Link>
                        <Nav.Link href="/order">Order</Nav.Link>
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