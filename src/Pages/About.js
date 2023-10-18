import React from 'react'
import Layout from '../Components/Layout/Layout'
import {Box, Divider, Typography,useTheme } from '@mui/material'

const About = () => {
  const theme = useTheme();

  const parentBox ={
    my:15,
    mx:3,
    textAlign:"center",
    "& h4":{
      fontWeight:"bold",
      my:2
    },
    "& p":{
      textAlign:'justify',
      fontSize:"18px"
    },
    " @media (max-width:599.95px)": {
      my:5,
      mx:1,
      "& h4":{
        fontWeight:"bold",
        fontSize:"20px",
        my:1
      },
      "& p":{
        textAlign:'justify',
        fontSize:"10px"
      },
    },
  }
  return (
    <Layout>
      <Box sx={parentBox}>
      <Typography variant='h4'>
        Welcome to My Restaurent
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reprehenderit illum rerum deleniti repellat nobis ex fugit nisi? Velit repellendus, vitae consequatur sunt modi inventore veniam amet expedita natus sapiente quisquam. Illum ut illo doloribus incidunt quisquam in corrupti dolore facilis ad maxime totam iure similique sunt saepe quas fugiat inventore, unde quis ab molestiae non voluptas. Ducimus voluptas obcaecati possimus odio accusamus molestias qui ipsum perspiciatis quod! Ea nam nobis fugit, adipisci perspiciatis optio cum doloremque architecto neque voluptas sed dolore, quia voluptatum. Dolore deleniti labore rerum, consequatur molestias dignissimos mollitia, voluptatibus magni blanditiis nihil obcaecati temporibus dolorum cupiditate.
      </Typography>
      <Divider/>
      <Typography variant='body2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reprehenderit illum rerum deleniti repellat nobis ex fugit nisi? Velit repellendus, vitae consequatur sunt modi inventore veniam amet expedita natus sapiente quisquam. Illum ut illo doloribus incidunt quisquam in corrupti dolore facilis ad maxime totam iure similique sunt saepe quas fugiat inventore, unde quis ab molestiae non voluptas. Ducimus voluptas obcaecati possimus odio accusamus molestias qui ipsum perspiciatis quod! Ea nam nobis fugit, adipisci perspiciatis optio cum doloremque architecto neque voluptas sed dolore, quia voluptatum. Dolore deleniti labore rerum, consequatur molestias dignissimos mollitia, voluptatibus magni blanditiis nihil obcaecati temporibus dolorum cupiditate.
      </Typography>
      </Box>
    </Layout>
  )
}

export default About