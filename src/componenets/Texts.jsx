import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const Texts = () => {
    var[inp,setInp] = useState (['hi'])
    var[data,setData] = useState ("");
    const handleInput =(e) => {
        console.log ('on');
        setData(e.target.value);
        console.log ('inp',data);




    }
    const add = () => {
        console.log ('c')
        setInp([...inp,data]);
        console.log ('sub',inp)
        setData('');
    }
    const submitHandler = (e) => {
        setData(data);
    }
          return (
    <div style={{margintop:'50px'}}>
        <TextField variant='outlined' onChange={handleInput} value={data} label='Enter your name:' >Enter Names:</TextField>
        <br/><br/><br/>
        <Button variant='text' onClick={add}>SUBMIT</Button>
        <ul>
        {inp.map((val,ind) =>{
            return <li keys={ind}>{val}</li>
            })}
        </ul>
        {/* <TextField variant='outlined' onChange={handleInput} label='enter age'>Enter Age:</TextField> */}
    </div>
  )
}

export default Texts