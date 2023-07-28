import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
const CirculLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "black",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress sx={{color:'green'}} />
    </Box>
  );
};

export default CirculLoading;
