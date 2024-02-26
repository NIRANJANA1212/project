import { Button, TextField, Typography, Button} from '@mui/material'
import React from 'react'


const AddBlog = () => {
  return (
    <div>
        
        <Typography variant='h1'>AddBlog</Typography>
        <br/><br/><br/>
        <TextField variant='outlined' label='Blog name'/>
        <br/>
        <TextField variant='outlined' label='Author name'/>
        <br/>
        <TextField variant='outlined' label='Description'/>
        <br/><br/><br/>
        <Button variant='contained'>Submit</Button>



    </div>
  )
}

export default AddBlog