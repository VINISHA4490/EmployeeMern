import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <div>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{'textAlign':'left'}}>
           Employee
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Admin</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar