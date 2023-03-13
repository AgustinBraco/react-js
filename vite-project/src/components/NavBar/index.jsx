import CartWidget from "../CartWidget";
import "./navbar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {NavLink} from 'react-router-dom';

function NavBar({changeLanguage, changeMode, changePokemon}) {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <NavLink to={'/'}>Home</NavLink>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>
          <NavLink to={'/category/shoes'}>Shoes</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to={'/category/pants'}>Pants</NavLink>
        </Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
    </Navbar>

    // <div className="navbar">
    //   <ul>
    //     <li>
    //       <button className="changeMode" onClick={changeMode}>Cambiar modo</button>
    //     </li>
    //     <li>
    //       <button className="chanceLanguage" onClick={changeLanguage}>Cambiar idioma</button>
    //     </li>
    //     <li>
    //       <button className="chanceLanguage" onClick={changePokemon}>Cambiar Pokemon</button>
    //     </li>
    //   </ul>
    //   <CartWidget />
    // </div>
  )
};

export default NavBar;