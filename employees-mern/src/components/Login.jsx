import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const [LoginForm,setLoginForm]=useState({
    email:'',
    password:''

  })
  function capValue() {
    axios.post('http://localhost:3000/user/login',LoginForm).then((res)=>{
      alert(res.data)
      navigate('/employee')
    }).catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
   
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '70%', md: '40%' },
          p: 4,
          boxShadow: 3,
          backgroundColor: 'white',
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" gutterBottom align="center" sx={{ color: 'darkblue' }}>
          User Login
        </Typography>
        <Grid container spacing={3}>
 
          <Grid item xs={12}>
            <TextField fullWidth
              id="username"
              label="Username"
              variant="outlined"
              autoComplete="off" 
            
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              autoComplete="off"   
              name='email'  onChange={(e)=>{
                setLoginForm({...LoginForm,email:e.target.value})
              }}
            />
          </Grid>

       
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              autoComplete="off"
              name='password'  onChange={(e)=>{
                setLoginForm({...LoginForm,password:e.target.value})
              }}
            />
          </Grid>

 
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ py: 1.5 }}
              onClick={capValue}
            >
              Login
            </Button>
          </Grid>


          <Grid item xs={12} textAlign="center">
            <Typography>
              New user?{' '}
              <Link to="/sign" style={{ color: 'darkblue', textDecoration: 'none' }}>
                Click here to sign up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Login