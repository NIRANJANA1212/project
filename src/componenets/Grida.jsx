import { CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';


const Grida = () => {

  var[products,setProducts] = useState([]);
  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response);
      setProducts(response.data);
    })
    .catch((error) => {console.log(error)})

  },[]);
  return (
    <div style={{margin:'4%'}}>
      <br/><br/><br/>
     <Grid container spacing={2}>

      {products.map((val,ind) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
            sx={{height:140}}
            image={val.image}
            title={val.title}
            description={val.description}
            />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.description}
        </Typography>
      </CardContent>
            {/* <Card xs={{ maxWidth: 345 }}></Card> */}
            </Grid>
          
        )
      })}
      {/* <Grid item xs={12} sm={6} md={4}>
        <TextField fullWidth variant='outlined' label='Item1'></TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField fullWidth variant='outlined' label='Item2'></TextField>
      </Grid> */}

     </Grid>
    </div>
  )
}

export default Grida