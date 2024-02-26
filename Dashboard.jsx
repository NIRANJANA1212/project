import { CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';


const Dashboard = () => {

  var[user,setUsers] = useState([]);
  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response.data);
      setUsers(response.data);
    })


  },[])
  return(
  <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell ><h4>userId</h4></TableCell>
                        <TableCell ><h4>Id</h4></TableCell>
                        <TableCell ><h4>Title</h4></TableCell>
                        <TableCell ><h4>Body</h4></TableCell>
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                    {user.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell key={i}>{val.userId}</TableCell>
                                <TableCell key={i}>{val.Id}</TableCell>
                                <TableCell key={i}>{val.Title}</TableCell>
                                <TableCell key={i}>{val.Body}</TableCell>
                        
                            </TableRow>
                        )
                    })
                    }

                    




                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
export default Dashboard
