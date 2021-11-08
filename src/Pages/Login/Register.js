import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bglogin from '../../Images/login/login.png'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
  
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData}
      newLoginData[field] = value
      setLoginData(newLoginData)
      console.log(field, value)
    }
    
    const handleSubmit = e => {
        alert('')
        e.preventDefault()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        
          <Grid item xs={12} md = {6} sx = {{marginTop : '100px'}}>
          <Typography variant="h6" gutterBottom>
            Register
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField 
                id="standard-basic"
                label="Your email" 
                name = 'email'
                onChange = {handleOnChange}
                style = {{width: '75%'}}
                type = 'email'
                variant="standard" />

            <TextField 
                id="standard-basic"
                label="Your password"
                name = "password"
                onChange = {handleOnChange}
                style = {{width: '75%' ,  marginTop : '10px'}}
                type = "password" 
                variant="standard" />

            <TextField 
                id="standard-basic"
                label="Confirm password"
                name = "Confirm password"
                onChange = {handleOnChange}
                style = {{width: '75%' ,  marginTop : '10px'}}
                type = "password" 
                variant="standard" />
                
                <br />
                <Button
                  type = 'submit'
                  style = {{width: '75%' ,  marginTop : '30px'}}                 variant = 'contained'
                 >Creat new account</Button>

                 <Link to = '/login' style = {{textDecoration : 'none'}}>
                    <Button>Already Register? click here</Button>
                </Link>

            </form>
          </Grid>
          <Grid item xs={12} md = {6}>
            <img
                style ={{width: '100%'}} 
                src={bglogin}
                alt="" />
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default Register;