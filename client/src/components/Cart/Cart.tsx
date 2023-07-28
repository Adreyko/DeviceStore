"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../HeaderElements/Header/Header";
import { useAppSelector } from "@/redux/hooks/redux-hook";
import CartDevices from "./CartDevices/CartDevices";
import ComponentsContainer from "../Container/ComponentsContainer";
import { Typography } from "@mui/material";
import Footer from "../Footer/Footer";
import EmtyCart from "./EmtyCart";
import CartContacts from "./CartContacts/CartContacts";
import { IDevice } from "@/interfaces/IDevices";
import { useAppDispatch } from "@/redux/hooks/redux-hook";
import { useEffect } from "react";
import { setDevices } from "@/redux/slices/storeSlice";
const Cart: React.FC = ({ devices }: IDevice[] | any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setDevices(devices));
  }, [dispatch, devices]);

  const cartDevices = useAppSelector((device) => device.cart.cart);
  const allPrices = cartDevices.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.amount,
    0
  );
  const cartDevicesEl = cartDevices.map((device) => (
    <CartDevices
      key={device.id}
      id={device.id}
      image={device.image}
      amount={device.amount}
      name={device.name}
      price={device.price}
      description={""}
      category={""}
      availability={false}
    />
  ));
  if (cartDevices.length == 0) {
    return (
      <>
        <ComponentsContainer>
          <Header />
          <EmtyCart />
        </ComponentsContainer>
        <Footer />
      </>
    );
  }
  return (
    <>
      <ComponentsContainer>
        <Header />
        <Box
          sx={{
            background: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            paddingY: "5%",
          }}
        >
          <Container
            sx={{
              marginY: { xs: "10%", md: "5%" },
              background: "#1d1d1d",
              width: "100%",
            }}
          >
            <Box sx={{ display: { xs: "block", md: "flex" } }}>
              {cartDevices.length > 0 && <CartContacts />}
              <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                <Typography
                  component="h2"
                  variant="h4"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingY: "20px",
                  }}
                >
                  Placing an order
                </Typography>
                {cartDevicesEl}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                ></Box>
              </Box>
            </Box>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                paddingX: "50px",
                display: "flex",
                justifyContent: "center",
                paddingY: "20px",
                borderTop: "3px solid white",
              }}
            >
              Total sum : {allPrices}$
            </Typography>
          </Container>
        </Box>
        <Footer />

      </ComponentsContainer>

    </>
  );
};

export default Cart;
