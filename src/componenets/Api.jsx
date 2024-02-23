import { TableCell, TableContainer, TableHead, TableRow, Table, TableBody } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Api = () => {
    var[user,setUser] =useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setUser(response.data);
        })
},[]);

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,ind) => {
                        return (
                            <TableRow>
                                <TableCell key={ind}>{val.name}</TableCell>
                                <TableCell key={ind}>{val.username}</TableCell>
                                <TableCell key={ind}>{val.address.city}</TableCell>
                            </TableRow>
                        )

                    })}
                </TableBody>
            </Table>
        </TableContainer>
            
    </div>
  )
}

export default Api
