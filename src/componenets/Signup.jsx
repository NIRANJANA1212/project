import { Typography,TextField,Button } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setData] = useState();
    const inputHandler = (e) => {
        console.log('on');
        setData({...data,[e.target.name]:e.target.value});//value in name is moved to value
        console.log(data);
    };
  return (
    <div>
        <br/><br/>
        <TextField variant='outlined' name='sname' label='username' onChange={inputHandler}></TextField>
        <br/><br/><br/>
        <TextField variant='outlined'  name='pswd' label='password' onChange={inputHandler}></TextField>
        <br/><br/><br/>
        <TextField variant='outlined'  name='email' label='email' onChange={inputHandler}></TextField>
        <br/><br/><br/>
        <Button variant='contained' color='success'>SIGNUP</Button>
        
    </div>
  )
}

export default Signup