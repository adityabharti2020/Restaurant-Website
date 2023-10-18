import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  const theme = useTheme();
  //   console.log(theme);
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: 'darkslategray',
          color: "white",
          p: 1,
        }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: { xs: "30px", sm: "60px", md: "70px" },
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(2px)",
              transition: "all 400ms ease-in",
            },
          }}
        >
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{ [theme.breakpoints.down("sm")]: { fontSize: "16px" }, my: 1 }}
        >
          All right reserved &copy; Restaurent
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
