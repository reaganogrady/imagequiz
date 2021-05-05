import 'bootstrap/dist/css/bootstrap.css'
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Link from "react-router-dom";

function NaviBar() {
    return(
        <NavBar>
            <NavBar.Brand>Image Quiz</NavBar.Brand>
            <Nav className ="mr-auto">
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    {
                        props.user === '' ?
                        <Link to="/login">Login</Link>
                        :
                        <Link to="/logout">Logout</Link>
                    }
                    
                </Nav.Link>
            </Nav>
        </NavBar>
    );
}

export default NaviBar();