import { useAppSelector } from "@/redux/hooks/redux-hook";
import { Box, Typography } from "@mui/material";
import React from "react";
import Devices from "./Devices";

const HoveredCart = ({ openCart }: any) => {
  const cartDevices = useAppSelector((devices) => devices.cart.cart);
  const devicesEl = cartDevices.map((device) => (
    <Devices
      key={device.id}
      image={device.image}
      name={device.name}
      price={device.price}
      id={device.id}
      amount={device.amount}
      description={device.description}
      availability={device.availability}
      category={device.category}
    />
  ));
  return (
    <>
      <Box
        display={openCart}
        sx={{
          position: "absolute",
          left: cartDevices.length ? "75%" : "85%",
          background: "#0E0A0A",
          Width: "50px",
          zIndex: "1",
          border: "1px solid orange",
          overflowY: cartDevices.length ? "scroll" : "hidden",
          padding: "20px",
          height: cartDevices.length ? "500px" : "50px",
          overflowX: "hidden",
        }}
      >
        {cartDevices.length ? (
          devicesEl
        ) : (
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              cursor: "pointer",
            }}
          >
            Cart is empty now.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default HoveredCart;
