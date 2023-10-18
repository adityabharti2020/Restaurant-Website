import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "../../Styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const drawer = (
    <Box sx={{ textAlign: "center",width:'150px' }} onClick={() => setMobileOpen(false)}>
      <Typography
              component={"div"}
              color={"goldenrod"}
              variant="h6"
              fontSize={15}
              sx={{flexGrow:1,my:1.5}}
              
            >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Divider/>
              <ul className="mobile-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black", position: "fixed" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={()=>setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component={"div"}
              color={"goldenrod"}
              variant="h6"
              flex={1}
              sx={{display:{xs:mobileOpen === true ? ' none' : 'block'}}}
            >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer variant="temporary" open={mobileOpen} onClose={()=>setMobileOpen(false)}>
            {drawer}
          </Drawer>
        </Box>
        <Toolbar/>
      </Box>
    </>
  );
};

export default Header;
