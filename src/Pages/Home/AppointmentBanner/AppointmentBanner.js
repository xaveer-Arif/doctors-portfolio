import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bgBanner from '../../../Images/appointment/appointment-bg.png';
import doctor from '../../../Images/appointment/doctor.png'
import { Button, Container, Typography } from '@mui/material';


const AppointmentBanner = () => {
    const appoinmentBG = {
        background : `url(${bgBanner})`,
        marginTop: '180px',
        // height: '500px',
        backgroundPosition : 'center buttom',  
        backgroundSize : 'cover',
        backgroundColor : 'rgba(35, 42, 56, .9)',
        backgroundBlendMode: "darken, luminosity"
        
    }
    
    return (
            <Container>
        <Box style = {appoinmentBG} sx={{ flexGrow: 1 }}>
            <Grid style = {{textAlign:'left'}} container spacing={2}>
                <Grid item xs={6} md={5}>
                    <img
                        style = {{width: 570, marginTop : -150 }}
                         src={doctor} alt="" />

                </Grid>
                <Grid item xs={6} md={7} >
                    <Typography variant = 'h5' style = {{color:'#18D2B5', marginTop:50}}>
                        Appointment
                    </Typography>
                    <Typography variant = 'h3' style = {{color:'white',marginTop: 30}}>
                        Make an appointment
                        <br /> today
                    </Typography>
                    <Typography variant = 'h6'  style = {{color:'gray',marginTop: 30}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus laudantium optio porro ea aliquid corporis assumenda! Atque, nemo voluptatum.
                    </Typography>
                    <Button variant= 'contained' style = {{backgroundColor:'#18D2B5',marginTop: 30}}>Learn More</Button>
                </Grid>
        
            </Grid>
    </Box>
    </Container>
       
    );
};

export default AppointmentBanner;