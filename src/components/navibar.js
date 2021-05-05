import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

function NaviBar(props) {
    var test = 0;
    return(
        /*<Navbar bg ="dark">
            <Navbar.Brand>Image Quiz</Navbar.Brand>
            <Nav className ="mr-auto">
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    {
                        test === 0 ?
                        <Link to="/login">Login</Link>
                        :
                        <Link to="/logout">Logout</Link>
                    }
                    
                </Nav.Link>
            </Nav>
        </Navbar>*/
        <h1>broken</h1>
    );
}

export default NaviBar();