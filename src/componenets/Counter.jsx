import {  TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount] = useState(0);
    const add = () => {
        console.log("add button clicked");
        setCount(count+1);
    };
    const sub = () => {
        console.log("sub button clicked");
        setCount(count-1);
    };
  return (
    <div>
        <Typography variant="h3">Counter:{count}</Typography>
        <Button variant="container" color='success' onClick={add}>+</Button>
        <Button variant="container" color='error' onClick={sub}>-</Button>
    </div>
  )
}

export default Counter