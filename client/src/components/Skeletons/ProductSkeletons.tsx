'use client'
import { Box, Grid } from "@mui/material";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { styles } from "../Products/styles/muiStyles";

const ProductSkeletons = () => {
  return (
    <Grid sx={styles.gridStyle} item lg={3} xl={2}>
      <Box sx={styles.boxStylesDevice}>
        <SkeletonTheme key={10} baseColor="#202020" highlightColor="#444">
          <Skeleton count={1} width={200} height={200} />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <Skeleton
                count={1}
                width={"100%"}
                height={20}
                style={{ margin: "5px" }}
              />
              <Skeleton
                count={1}
                width={"100%"}
                height={20}
                style={{ margin: "5px" }}
              />
            </div>
          </div>
        </SkeletonTheme>
      </Box>
    </Grid>
  );
};

export default ProductSkeletons;
