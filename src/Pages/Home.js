import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import bgImage from "../images/banner.jpeg";
import "../Styles/HomeStyle.css";
const Home = () => {
  const theme = useTheme();
  const isSmall = theme.breakpoints.down("sm");
  console.log(isSmall);
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    isSmall: {
      justifyContent: "center",
      alignItems: "center",
    },
  };
  const responsiveStyle = {
    width: "auto",
    ml: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "98%",
    height: "90vh",
    " @media (max-width:599.95px)": {
      marginLeft: "0px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
    },
  };
  const Heading = {
    fontSize: "90px",
    fontFamily: "Gill Sans",
    fontWeight: "bold",
    " @media (max-width:599.95px)": {
      fontSize: "40px",
      color: "black",
      bgcolor: "lightgray",
      padding: "2px 5px",
      borderRadius: "5px",
    },
  };
  const Heading2 = {
    mt: 3,
    fontSize: "40px",
    fontWeight: "lighter",
    " @media (max-width:599.95px)": {
      fontSize: "20px",
      color: "black",
      bgcolor: "lightgray",
      padding: "2px 5px",
      borderRadius: "5px",
    },
  };
  const button = {
    bgcolor: "black",
    mt: 3,
    fontSize: "20px",
    "&:hover": { bgcolor: "green", transition: ".5s ease-in" },
    " @media (max-width:599.95px)": {
      fontSize: "18px",
      bgcolor: "black",
      color: "white",
      borderRadius: "5px",
      marginY: 3,
    },
  };
  return (
    <Layout>
      <Box sx={style} component={"div"} className="Header">
        <Box component={"div"} sx={responsiveStyle}>
          <Typography variant="h1" sx={Heading}>
            Food Website
          </Typography>
          <Typography variant="h3" sx={Heading2}>
            Best Food in India
          </Typography>
          <Link to="/menu">
            <Button variant="contained" sx={button}>
              Order Now
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
