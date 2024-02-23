import { AppBar, Toolbar, Typography, Button} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} align='left' variant='h6'>
                  APP
                </Typography>
                <Button>
                  <Link to='/' Style={{color:'white'}}>Login</Link>
                </Button>
                <Button>
                  <Link to='/sign' Style={{color:'white'}}>Signup</Link>
                </Button>
                <Button>
                  <Link to='/a' Style={{color:'white'}}>Table</Link>
                </Button>
                <Button>
                  <Link to='/b' Style={{color:'white'}}>Texts</Link>
                </Button>
                <Button>
                  <Link to='/c' Style={{color:'white'}}>Api</Link>
                </Button>
                <Button>
                  <Link to='/d' Style={{color:'white'}}>Grida</Link>
                </Button>
                <Button>
                  <Link to='/e' Style={{color:'white'}}>Carda</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar