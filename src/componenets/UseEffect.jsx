import { Typography, Button} from '@mui/material'
import React, { useEffect } from 'react'

const UseEffect = () => {
  var[x,setX] = useEffect();
  const inpt1 = ()=> {
    setX("React")
  }
  const inpt2 = ()=> {
    setX("Angular")
  }
  const inpt3 = ()=> {
    setX('Next')
  }
  useEffect(()=> {
  inpt2();
  },[])
  return (
    <div>
      <br/><br/>
      <Typography variant='h1'>welcome to {x}</Typography>
      <br/><br/><br/>
      <Button variant='text' onClick={inpt1} color='error'>React</Button>
      <br/><br/><br/>
      <Button variant='text' onClick={inpt2} color='info'>Angular</Button>
      <br/><br/><br/>
      <Button variant='text' onClick={inpt3} color='success'>View</Button>
    </div>
  )
}

export default UseEffect