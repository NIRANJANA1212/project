import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[names,setNames] =useState ("uyg")
  return (
    <div>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell Style={{color:"red",fontFamily:"cursive",fontSize:"50px"}}>Names</TableCell>
                        <TableCell Style={{color:"blue",fontFamily:"cursive",fontSize:"50px"}}>Names</TableCell>
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                    {names.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val}</TableCell>
                               ll
                        
                            </TableRow>
                        )
                    })}

                    




                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping