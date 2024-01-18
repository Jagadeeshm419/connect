import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography, Avatar, Button } from '@mui/material'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { NavLink } from 'react-router-dom'


const Header = () => {
  const [data, setdata] = useState(0)
  return (
    <AppBar position='sticky' sx={{ backgroundColor: '#1b55de'}}>
      <Toolbar>
        <Typography>
          <AnalyticsIcon sx={{cursor:'pointer'}}/>
        </Typography>

        <Tabs textColor='inherit' sx={{ ml: 'auto'}} indicatorColor='secondary'
          value={data} onChange={(e, val) => setdata(val)}>
          <Tab LinkComponent={NavLink} to='/home' label='Home' />
          <Tab LinkComponent={NavLink} to='/about' label='About' />
          <Tab LinkComponent={NavLink} to='/edit' label='Edit' />
          <Button variant="contained" sx={{ml:2, backgroundColor:'#585a66'}}>Logout</Button>
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default Header