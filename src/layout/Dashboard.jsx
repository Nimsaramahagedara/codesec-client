import React from 'react'
import AppBarComponent from '../components/AppBar'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
     <AppBarComponent/>
    <Container component="main" maxWidth="lg">
      <Outlet/>
    </Container>
    </>
  )
}

export default Dashboard