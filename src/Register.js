import React from 'react'
import { Navbar } from 'react-bootstrap';
import { NavLink,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
  //  const data = new FormData(event.currentTarget);
    const email=document.getElementById('email');
    const password=document.getElementById('password');

    if (email==='jumajokha54@gmail.com' && password ==='munirah8602'){
        console.log('Successfull');
       

    }
    else{
        console.log('Error');
        window.Location.href='/LogOriginal';
    }
  };
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
<Container component="main" maxWidth="sm">
<Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
         <center> <h1> Customer Register Form</h1></center>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone number"
            label="Phone number"
            type="phone number"
            id="phone number"
            autoComplete="phone number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="available time"
            label="available time"
            type="availabletime"
            id="available time"
            autoComplete="available time"
          />
          <TextField
          margin="normal"
          required
          fullWidth
          name="price"
          label="price"
          type="price"
          id="price"
          autoComplete="price"
          
          />
           <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          </Box>
         

     </Box>
     </Container>   

</div>
</div>

  )
}

export default Register