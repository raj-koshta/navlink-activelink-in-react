import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const isActiveLink = ({isActive}) =>{
    return {
      color: isActive ? "#646cff" : "white"
    }
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="m-auto fw-bold my-3">

            {/* Case : 1 using className */}

            {/* <NavLink className={({isActive}) =>
              isActive ? "me-5 fw-bold navlink active-link" : "me-5 navlink text-white"
            } to="/navlink-activelink-in-react/">Home</NavLink>

            <NavLink className={({isActive}) =>
              isActive ? "me-5 fw-bold navlink active-link" : "me-5 navlink text-white"
            } to="/navlink-activelink-in-react/contact">Contact</NavLink>

            <NavLink className={({isActive}) =>
              isActive ? "me-5 fw-bold navlink active-link" : "me-5 navlink text-white"
            } to="/navlink-activelink-in-react/service">Service</NavLink> */}

            {/* Case: 2 using Style */}

            <NavLink style={isActiveLink} className="me-5 fw-bold navlink" to="/navlink-activelink-in-react/">Home</NavLink>

            <NavLink style={isActiveLink} className="me-5 fw-bold navlink" to="/navlink-activelink-in-react/contact">Contact</NavLink>

            <NavLink style={isActiveLink} className="me-5 fw-bold navlink" to="/navlink-activelink-in-react/service">Service</NavLink>


          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default Header