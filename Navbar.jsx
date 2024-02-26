import { AppBar, Toolbar, Typography, Button} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} align='left' variant='h6'>
                  Blog
                </Typography>
                <Button>
                  <Link to='/' Style={{color:'white'}}>AddBlog</Link>
                </Button>
                <Button>
                  <Link to='/sign' Style={{color:'white'}}>DashBoard</Link>
                </Button>

            </Toolbar>                
        </AppBar>
    </div>
  )
}

export default Navbar