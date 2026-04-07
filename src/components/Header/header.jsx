import "./header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function Header() {
  const gettop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <div className="header">
           <Navbar expand="lg" >
  <Container>
    <Navbar.Brand  className="link"><i className="fa-solid fa-plant-wilt me-2"></i>Modern Green Company</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" navbar ms-auto">
<Link to="/" className="nav-link text-light"  onClick={gettop}><i className="fas fa-home me-1"></i> Home</Link>     
<Link to="/service" className="nav-link text-light"  onClick={gettop}><i className="fas fa-cogs me-1" ></i>Our Services</Link>   
<Link to="/project" className="nav-link text-light"  onClick={gettop}><i className="fas fa-box-open me-1" ></i>Our Products</Link>   
<Link to="/article" className="nav-link text-light"  onClick={gettop}><i className="fas fa-newspaper me-1" ></i>Articles</Link>   
<Link to="/contactus" className="nav-link text-light"  onClick={gettop}> <i className="fas fa-envelope me-1" ></i>Contact Us</Link>   
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
 
  );
}

export default Header;