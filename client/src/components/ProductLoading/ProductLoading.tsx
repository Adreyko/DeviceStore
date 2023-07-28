"use client";
import React, { useState } from "react";
import ProductSkeletons from "@/components/Skeletons/ProductSkeletons";
import { uid } from "uid";
import ComponentsContainer from "@/components/Container/ComponentsContainer";
import Header from "@/components/HeaderElements/Header/Header";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "@/components/Products/styles/muiStyles";
import Footer from "@/components/Footer/Footer";
import Panel from "@/components/Panel/Panel";

const ProductLoading = () => {
  const [sortedBy, setSortedBy] = useState("");
  return (
    <>
      <>
        <ComponentsContainer>
          <Header />
          <Panel
            setSortedBy={setSortedBy}
            sortedBy={sortedBy}
            currentPageId={""}
          />
          <Box sx={styles.boxStyles2}>
            <Grid
              container
              spacing={1}
              item
              xs={12}
              sx={{ justifyContent: "center", height: "100%" }}
            >
              {new Array(10).fill(null).map(() => (
                <ProductSkeletons key={uid()} />
              ))}
            </Grid>
          </Box>
          <Footer />
        </ComponentsContainer>
      </>
    </>
  );
};

export default ProductLoading;
