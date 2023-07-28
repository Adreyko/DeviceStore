import { IDevice } from "@/interfaces/IDevices";
import { Box, Typography } from "@mui/material";
import React from "react";
import { cartStyles } from "../CartStyles";
import AmountsButtons from "../CartDevices/Components/AmountsButtons";
import Image from "next/image";

const Devices: React.FC<IDevice> = ({ name, id, price, image, amount }) => {
  return (
    <Box sx={cartStyles.cartContainer}>
      <Box sx={{ display: "block", alignItems: "center", width: "70%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              paddingX:'5%',
              width: "250px",
              height: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            
            }}
          >
            <Image
              src={`/images/${image}`}
              alt="cartIcon"
              height={300}
              width={300}
              layout="responsive"
              objectFit="contain"
            />
          </Box>
          <Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: "white", marginRight: "10px" }}
              >
                {name}
              </Typography>

              <Typography
                variant="h6"
                component="h6"
                sx={{ color: "green", marginRight: "5px" }}
              >
                Price:
              </Typography>
              <Typography variant="h6" component="h6" sx={{ color: "white" }}>
                {price * amount}$
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Devices;
