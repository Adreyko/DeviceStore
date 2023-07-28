import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
const CartContacts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginY: "20px",
        width: { xs: "100%", md: "30%" },
        flexDirection: "column",
        
        borderRadius: "20px",
      }}
    >
      <Typography variant="h4" component="h3" sx={{ paddingTop: "10px" }}>
        Contact Information
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20%",
          flexDirection: "column",
        }}
      >
        <input className={styles.input} placeholder="Your name" />
        <input className={styles.input} placeholder="Email" />
      </Box>
      <Button
        sx={{ width: "180px", marginTop: "5px" }}
        variant="contained"
        color="error"
      >
        Order
      </Button>
    </Box>
  );
};

export default CartContacts;
