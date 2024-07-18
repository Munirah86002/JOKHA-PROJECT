import React from 'react'
//import {AppBar,Toolbar,Typography}  from"@mui/material"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { NavLink,Nav} from 'react-bootstrap';
//import NavLink from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
   <div>
      <Navbar collapseOnSelect expand="md" bg='dark' variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav>
                      <NavLink eventKey='1' as={Link} to='/'>Dashboard</NavLink>
                      <NavLink eventKey='2' as={Link} to='/Register'>RegisterBeachBoy</NavLink>
                      <NavLink eventKey='3' as={Link} to='/View'>ViewBeachBoy</NavLink>
                  </Nav>
              </Navbar.Collapse>
        </Navbar>

          <div>
            <div>
              <h1>Welcome to Aqua Adventures</h1>
              <p>Thrilling Aqua Adventures : snorkeling,diving,swmmiming. Safe, guided tours for unforgettable memories.</p>
            </div>
            <div>
              <a href='Menu'>Menu</a>
            </div>
            <div>
              <a href='LogOriginal'>Log In</a>
            </div>
          
          </div>

    </div>
    
  );
}

export default Dashboard