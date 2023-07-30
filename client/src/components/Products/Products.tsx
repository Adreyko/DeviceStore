"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/redux-hook";
import { Box, Grid, Typography } from "@mui/material";
import Header from "../HeaderElements/Header/Header";
import { styles } from "./styles/muiStyles";
import Sort from "./Sort/Sort";
import Device from "./Product/Product";
import ComponentsContainer from "../Container/ComponentsContainer";
import Footer from "../Footer/Footer";
import { fetchDevices } from "@/redux/slices/thunk/fetchData";
import "react-loading-skeleton/dist/skeleton.css";
import { IDevice } from "@/interfaces/IDevices";
import { setDevices } from "@/redux/slices/storeSlice";

const Products = ({ devices }: IDevice[] | any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDevices(devices));
  }, [dispatch, devices]);
  
  const pathname = usePathname();

  const currentPageId = String(pathname).slice(1);
  const [sortedBy, setSortedBy] = useState("");

  const currentDevices = devices?.filter(
    (device: IDevice) =>
      device.category.toLocaleLowerCase() === currentPageId.toLocaleLowerCase()
  );

  const sortedElements = currentDevices.sort(
    (a: { price: number }, b: { price: number }) => {
      if (sortedBy === "desc")
        return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
      if (sortedBy === "asc")
        return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
      return 0;
    }
  );
  const productEl = sortedElements.map((el: IDevice) => {
    return (
      <Device
        id={el.id}
        availability={el.availability}
        key={el.id}
        price={el.price}
        name={el.name}
        description={el.description}
        image={el.image}
        category={el.category}
        amount={0}
      />
    );
  });

  return (
    <>
      <ComponentsContainer>
        <Header />
        <Box sx={styles.boxStyles3}>
          <Typography component="div" variant="h5" color={"white"}>
            {currentPageId.toUpperCase()}
          </Typography>
          <Sort sortBy={sortedBy} setSortedBy={setSortedBy} />
        </Box>
        <Box sx={styles.boxStyles2}>
          <Grid
            container
            spacing={1}
            item
            xs={12}
            sx={{ justifyContent: "center", height: "100%" }}
          >
            {productEl}
          </Grid>
        </Box>
        <Footer />
      </ComponentsContainer>
    </>
  );
};

export default Products;
