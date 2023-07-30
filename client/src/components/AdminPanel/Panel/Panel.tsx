import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
const Panel = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: "100px",
          color: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ color: "white", background: "#1d1d1d", padding: "20px" }}>
          <Typography variant="h2">Add some product</Typography>
          
        </Box>
      </Box>
    </>
  );
};

export default Panel;
