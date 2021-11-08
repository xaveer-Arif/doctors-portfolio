import React from 'react';
import { styled } from '@mui/material/styles';
import { shadows } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import fluoride from '../../../Images/service/fluoride.png';
import SingleService from '../SingleService/SingleService';
import Typography from '@mui/material/Typography';


const services = [
    {
        id: 1,
        name: "fluoride Treatment",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit illum porro saepe veniam quibusdam dolor voluptate distinctio numquam! Cum, quasi.",
        img: fluoride
    },
    {   id: 2,
        name: "fluoride Treatment",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit illum porro saepe veniam quibusdam dolor voluptate distinctio numquam! Cum, quasi.",
        img: fluoride
    },
    {   id: 3,
        name: "fluoride Treatment",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit illum porro saepe veniam quibusdam dolor voluptate distinctio numquam! Cum, quasi.",
        img: fluoride
    }
]

const Services = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text,
      }));
    return (
        <Box sx={{ flexGrow: 1 }}>
           <Typography variant="h5" component="h2" sx = {{fontWeight:'bold'}}>
               Our Services
            </Typography>
           <Typography variant="h3" component="h2">
               Services We Provided
            </Typography>

      <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service => <SingleService
            key = {service.id}
            service = {service}
            ></SingleService>)
        }
      </Grid>
    </Box>
    );
};

export default Services;