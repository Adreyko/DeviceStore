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
import { imageLoader } from "@/utils/imageloader";

const DeviceDetail = ({ product }: IDevice | any) => {
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

        <Box sx={styles.container}>
          <Container sx={styles.deviceContainer}>
            <Box sx={{ width: { xl: "100%", sm: "30%", md: "40%" } }}>
              <Image
                loader={() => imageLoader(product.data.image)}
                src={`s3`}
                alt="device"
                height={800}
                width={800}
                layout="responsive"
                objectFit="contain"
              />
            </Box>
            <Box sx={styles.rightSectionBox}>
              <Typography component="h1" variant="h5">
                {product?.name}
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
                  variant="h6"
                  sx={styles.avaibleStyle}
                >
                  {product?.data.availability ? "Avaible" : "Soon..."}
                </Typography>
              </Box>
              <Typography
                component="h1"
                variant="h4"
                sx={{ paddingY: "20px", borderBottom: "1px solid gray" }}
              >
                {product?.data.price} $
              </Typography>
              {product?.data.category === "iphones" || "accessory" ? (
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
                variant="h6"
                sx={{ paddingY: "20px", borderBottom: "1px solid gray" }}
              >
                {product?.data.description}
              </Typography>
            </Box>
          </Container>
        </Box>
      </ComponentsContainer>
    </>
  );
};

export default DeviceDetail;
