/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { classNames, useScrollPosition } from "../tools";
import logo from "../../../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// const Navbar = () => {
//   //activate sidebar
//   const [sidebar, setSidebar] = useState(false);
//   const [activate, setActivate] = useState([]);

//   useEffect(() => {
//     if (sidebar) {
//       setActivate("navbar-mobile");
//     } else {
//       setActivate("");
//     }
//   }, [sidebar]);

//   //console.logs position of window.offsetY
//   const scrollPosition = useScrollPosition();

//   return (
//     <header
//       id="header"
//       className={classNames(
//         scrollPosition > 100 ? "header-scrolled fixed-top" : "fixed-top"
//       )}
//       data-testid="Navbar"
//     >
//       <div className="container d-flex align-items-center">
//         <a href="/" className="logo me-auto">
//           <img className="navbarLogo" src={logo} alt="logo" />
//         </a>

//         <nav id="navbar" className={`navbar ${activate}`}>
//           <ul>
//             <li>
//               <a className="nav-link scrollto" href="#hero">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="nav-link scrollto" href="#about">
//                 About
//               </a>
//             </li>
//             <li>
//               <a className="nav-link scrollto" href="#services">
//                 Features
//               </a>
//             </li>
//             <li className="dropdown">
//               <a className="nav-link" href="#">
//                 <span>
//                   Community <FaChevronDown />
//                 </span>
//               </a>
//               <ul>
//                 <li>
//                   <a href="#">Join Discord</a>
//                 </li>
//                 <li>
//                   <a href="#">Provide toilet data</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a className="nav-link getstarted scrollto" href="#about">
//                 Get Started
//               </a>
//             </li>
//           </ul>
//           <FaBars
//             className="bi bi-list mobile-nav-toggle"
//             onClick={() => {
//               setSidebar(!sidebar);
//             }}
//           />
//         </nav>
//       </div>
//     </header>
//   );
// };
const HomeNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

export default Navbar;
