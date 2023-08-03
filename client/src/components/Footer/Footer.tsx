'use client'
import { Box, Container } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#191414",
        display: "flex",
        color: "white",
        paddingY:"5%"
        
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" component="h4" sx={{padding:'40px'}}>
        <Typography  sx={{color:'gray'}} component="span">2023</Typography>   AndriyStore
        </Typography>
        <AppleIcon sx={{ fontSize: "5rem" }} />
        <Box sx={{ display: "flex" ,paddingY:'40px'}}>
          <InstagramIcon sx={{marginRight:"10px"}} />
          <GitHubIcon sx={{marginRight:"10px"}}/>
          <LinkedInIcon sx={{marginRight:"10px"}}/>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
