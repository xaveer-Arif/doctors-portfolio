import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import banner from '../../../Images/chair.png';
import bg from '../../../Images/homeBanner/bg.png'

const HomeBanner = () => {
    const bannerBg ={
        background: `url(${bg})`,
        height: '600px',
        
    }

const varticalAlign = {
    display: 'flex',
    alignItems: 'center'
}
    return (
        <Container  sx={{ flexGrow: 1, margin: ''}}>
        <Grid container  spacing={10} style={ bannerBg}>

          <Grid item xs={6} md={5} sx = {{...varticalAlign, marginRight: '100px', textAlign : 'left'}}>
            <Box>
            <Typography variant = 'h2' sx ={{fontWeight : 'bold' }}>
                Your New Smile <br />
                Starts Here
            </Typography>
            <Typography variant = 'p' >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam error architecto magni. Et quos error tempora dolor sequi, necessitatibus quia?
            </Typography> <br />
            <Button variant = 'contained' sx= {{marginTop: '30px'}}>Learn More</Button>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={6} style = {varticalAlign}>
                <img style = {{width:'100%'}} src={banner} alt="" />
          </Grid>
          
        </Grid>
      </Container>
    );
};

export default HomeBanner;