"use client";
import React, { useEffect, useState } from "react";
import Header from "../HeaderElements/Header/Header";
import { Box, Button, Container, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/redux-hook";
import { styles } from "./deviceStyles";
import Image from "next/image";
import { IDevice } from "@/interfaces/IDevices";
import { Typography } from "@mui/material";
import { colorsTypes } from "./colors";
import ColorsComponent from "./ColorsComponent";
import { uid } from "uid";
import Footer from "../Footer/Footer";
import ComponentsContainer from "../Container/ComponentsContainer";
import { fetchDevices } from "@/redux/slices/thunk/fetchData";
const DeviceDetail = ({ id }: string | any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);
  const allDevices = useAppSelector((device) => device.devices.devices);
  const currentDivice: IDevice | undefined = allDevices.find(
    (el) => el.id === id
  );
  const [activeId, setActiveId] = useState<string | null>(null);

  const colorsEl = colorsTypes.map((color) => (
    <ColorsComponent
      key={uid()}
      id={uid()}
      colorId={color.colorId}
      activeId={activeId}
      setActiveId={setActiveId}
    />
  ));
  return (
    <>
      <ComponentsContainer>
        <Header />
        <Box sx={styles.container}>
          <Container sx={styles.deviceContainer}>
            <Box sx={{ width: { xl: "100%", sm: "30%", md: "40%" } }}>
              <Image
                src={`/images/${currentDivice?.image}`}
                alt="device"
                height={800}
                width={800}
                layout="responsive"
                objectFit="contain"
              />
            </Box>
            <Box sx={styles.rightSectionBox}>
              <Typography component="h1" variant="h5">
                {currentDivice?.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "5px",
                }}
              >
                <Typography
                  component="h6"
                  variant="h7"
                  sx={styles.avaibleStyle}
                >
                  {currentDivice?.availability ? "Avaible" : "Soon..."}
                </Typography>
              </Box>
              <Typography
                component="h1"
                variant="h4"
                sx={{ paddingY: "20px", borderBottom: "1px solid gray" }}
              >
                {currentDivice?.price} $
              </Typography>
              {currentDivice?.category === "iphones" || "accessory" ? (
                <Typography
                  component="div"
                  variant="h5"
                  sx={styles.colorsContainer}
                >
                  <h1 className="color">Color:</h1>
                  {colorsEl}
                </Typography>
              ) : (
                <></>
              )}
              <Typography
                component="div"
                variant="h4"
                sx={{
                  display: "flex",
                  borderBottom: "1px solid gray",
                  paddingY: "20px",
                }}
              >
                <Button
                  color="error"
                  variant="contained"
                  sx={{ width: "100%" }}
                >
                  Buy
                </Button>
              </Typography>
              <Typography
                component="h4"
                variant="h7"
                sx={{ paddingY: "20px", borderBottom: "1px solid gray" }}
              >
                {currentDivice?.description}
              </Typography>
            </Box>
          </Container>
        </Box>
        <Footer />
      </ComponentsContainer>
    </>
  );
};

export default DeviceDetail;
