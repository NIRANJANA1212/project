import {  TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'


const StateBasics = () => {
    var[fname,setFname] = useState('Aps');
    var[val,setVal] = useState();
    const handleInput = (e) => {
        setFname(e.Target.value);
        setVal(e.Target.value);
        console.log(e.Target.value)
    };
    const submitHandler =() => {
        
        console.log("click");
        setFname(val);
    };
    
    
  return (
    <div>
        <br/><br/><br/>
        <Typography variant='h2'>
            WELCOME {fname}
        </Typography>
        <TextField variant='filled' label='Type your name'onChange={handleInput}/>
        <br/><br/>  
        <Button variant='contained'onChange={submitHandler}>submit</Button> 
    </div>
  );
}

export default StateBasics