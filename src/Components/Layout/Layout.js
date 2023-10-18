import React from 'react'
import Header from './Header'
import { Box } from '@mui/material'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Box sx={{p:1}}>
        {children}
    </Box>
    <Footer/>
    </>
  )
}

export default Layout