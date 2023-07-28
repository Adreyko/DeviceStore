import { Box } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Typography } from "@mui/material";
import Link from "next/link";

const EmtyCart = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          paddingY: "10%",
          height: "100%",
        }}
      >
        <Typography variant="h2" component="h2" sx={{fontSize:{xs : '20px',sm:'50px' }}}>
          Your cart is empty!
        </Typography>
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: "10rem" }} />
        <Link href="/">
          <Typography variant="h4" component="h2">
            Go back to shopping!
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default EmtyCart;
