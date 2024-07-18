import React, { useState,useEffect } from 'react'
import { Navbar } from 'react-bootstrap';
import { NavLink,Nav} from 'react-bootstrap';
import { Link} from '@mui/material';
 import { Delete,Edit} from '@mui/icons-material';
 import {Table,TableHead,TableRow,TableCell,TableBody,IconButton} from '@mui/material';
 import axios from 'axios';
 import EditIcon from '@mui/icons-material/Edit'; 
 import DeleteIcon from '@mui/icons-material/Delete';
//  import Beachboy from './Beachboy';


function View() {

    const [register , setBeachboy] =useState([]);

    useEffect(() => {
      fetchBeachboy();

    },[]);
        
    const fetchBeachboy = async () => {
      try{
        const response =  await axios .get('api');
        setBeachboy(response.data); 
      } catch (error){
        console.error('Error fetching beachboy:',error);
      }
    };

    const handleEdit = async (id)  => {
      try{
        const response = await axios .get('api');
        setBeachboy(response.data);


        
      }catch (error) {
        console.error('Error fetching beachboy:',error); 
      }
    };


    const handleDelete = async (id) => {
      try{
        console.log('Delete beachboy with id :',id);
        //set api delete
        await axios.delete('api');
        fetchBeachboy();

      }catch (error){
        console.error('Error deleting beachboy :',error);
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

      
     
     
        



  
<Table>
    <TableHead>
      <TableRow>
        <TableCell>NAME </TableCell>
        <TableCell>PHONE NUMBER</TableCell>
        <TableCell>AVAILABLE TIME</TableCell>
        <TableCell>PRICE</TableCell>
        <TableCell>ACTIONS</TableCell>

      </TableRow>

    </TableHead>
        <TableBody>
          {register.map((register) => (
       <TableRow key ={register.id}>
       <TableCell>{register.name}</TableCell>
        <TableCell>{register.phonenumber}</TableCell>
       <TableCell>{register.availabletime}</TableCell>
       <TableCell>{register.price}</TableCell>
       <TableCell>
       <IconButton aria-label="edit" onClick={()=> handleEdit(register.id)}>
                  <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => handleDelete(register.id)}>
                    <DeleteIcon />
                    </IconButton>
         <IconButton color="primary" onClick>
        <Edit />
       </IconButton>
        <IconButton color="primary" onClick>
              <Delete />
            </IconButton>

       </TableCell>

        
      </TableRow>
          ))}

      <TableRow>
              <TableCell>MUNAWAR KHAMIS JUMA</TableCell>
                <TableCell>0777481566</TableCell>
              <TableCell>02:00</TableCell>
              <TableCell>300000</TableCell>
              <TableCell>
                <IconButton color="primary" onClick>
                <Edit />
              </IconButton>
                <IconButton color="primary" onClick>
                      <Delete />
                    </IconButton>

              </TableCell>
       </TableRow>

       <TableRow>
              <TableCell>JOKHA KHAMIS JUMA</TableCell>
                <TableCell>0615429001</TableCell>
              <TableCell>01:00</TableCell>
              <TableCell>100000</TableCell>
              <TableCell>
                <IconButton aria-label="edit" onClick={()=> handleEdit(register.id)}>
                  <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => handleDelete(register.id)}>
                    <EditIcon />
                    </IconButton>
                <IconButton color="primary" onClick>
                <Edit />
              </IconButton>
                <IconButton color="primary" onClick>
                      <Delete />
                    </IconButton>

              </TableCell>

        
      </TableRow>
     </TableBody>
  </Table>
</div> 



  
  
    
   
  );
}

export default View;