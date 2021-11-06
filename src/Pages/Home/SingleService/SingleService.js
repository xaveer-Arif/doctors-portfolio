import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SingleService = ({service}) => {
    const {id, name, details, img} = service
    console.log(img)
    return (
   
<Grid item xs={2} sm={4} md={4} >
    <Card sx={{ minWidth: 275 , m:0 , boxShadow: 0}}>
    <CardMedia
        component="img"
        style  = {{width:'auto', height: '80px' , margin : "0 auto"}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
         {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
   
    </Card>
            </Grid>
        
    );
};

export default SingleService;