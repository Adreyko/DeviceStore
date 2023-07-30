import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useAppSelector } from "@/redux/hooks/redux-hook";
import Product from "./Product";
import { uid } from "uid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styles } from "./styles/muiStyles";

const CarouselComponent: React.FC = () => {
  const devices = useAppSelector((device) => device.devices.devices);

  const devicesEl = devices?.map((dev) => (
    <Product
      key={uid()}
      id={uid()}
      name={dev.name}
      price={dev.price}
      description={dev.description}
      category={dev.category}
      image={dev.image}
      availability={dev.availability}
      amount={dev.amount}
    />
  ));

  return (
    <Box sx={styles.boxStyle}>
      <Typography
        sx={{
          fontWeight: "bold",
          marginBottom: "100px",
          fontSize: { xs: "1rem", md: "2rem" },
        }}
        variant="h4"
        noWrap
        component="div"
      >
        Embrace the power of the Apple ecosystem. {<br />}Elevate your digital
        experience
      </Typography>
      <Carousel
        thumbWidth={500}
        showIndicators={false}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        width={1000}
        centerMode={true}
        dynamicHeight={true}
        selectedItem={4}
      >
        {devicesEl}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
