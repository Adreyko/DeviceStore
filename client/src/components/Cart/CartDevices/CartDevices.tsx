import { IDevice } from "@/interfaces/IDevices";
import { Box, Button, Input, Paper } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import useCartController from "@/hooks/useCartConrollert";
import { cartStyles } from "../CartStyles";
import CartContacts from "../CartContacts/CartContacts";
import AmountsButtons from "./Components/AmountsButtons";
import RemoveButton from "./Components/RemoveButton";

const CartDevices: React.FC<IDevice> = ({ id, image, amount, name, price }) => {
  return (
    <Box sx={cartStyles.cartContainer}>
      <Box sx={{ display: "block", alignItems: "center", width: "70%" }}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box sx={{ width: "100px", height: "100px" }}>
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
            <AmountsButtons amount={amount} id={id} />
          </Box>
        </Box>
      </Box>
      <RemoveButton id={id} />
    </Box>
  );
};

export default CartDevices;
