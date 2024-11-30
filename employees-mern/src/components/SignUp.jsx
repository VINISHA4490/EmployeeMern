import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 import axios from 'axios'

const SignUp = () => {
  const [users,setUsers]=useState();
  const inputhandler=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
  }
  const addhandler=()=>{
    console.log(users);
    axios.post('localhost:3000/user/signup',users).then(()=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>

<Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9', 
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '70%', md: '50%' },
          p: 4,
          boxShadow: 3,
    
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Sign Up
        </Typography>
        <Grid container spacing={3}>
      
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="name" label="Name" variant="outlined" name="name" onChange={inputhandler}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="email" label="Email" variant="outlined"name="email" onChange={inputhandler}/>
          </Grid>

            <Grid item xs={12}>
            <TextField fullWidth id="address"label="Address"variant="outlined" multiline rows={4} name="address" onChange={inputhandler}/>
          </Grid>
        

   
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="phone" label="Phone Number" variant="outlined" name="phone" onChange={inputhandler}/>
          </Grid>

        
  
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="password" label="Password" type="password" variant="outlined" name="password" onChange={inputhandler}/>
          </Grid>

          {/* Sign-Up Button */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ py: 1.5 }} onClick={addhandler}
            >
              Sign Up
            </Button>
          </Grid>

          {/* Login Link */}
          <Grid item xs={12} textAlign="center">
            <Typography>
              Already registered?{' '}
              <Link to="/" style={{ color: 'darkblue', textDecoration: 'none' }}>
                Click here to login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </div>
  );
}
export default SignUp