import { IDevice } from "@/interfaces/IDevices";
import React from "react";
import Image from "next/image";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styles } from "./styles/muiStyles";
import { imageLoader } from "@/utils/imageloader";
const Product: React.FC<IDevice> = ({
  image,
  name,
  availability,
}) => {
  return (
    availability && (
      <Paper sx={styles.paperStyle}>
        <Typography
          variant="h6"
          sx={{ color: "white", padding: "10px" }}
          component="div"
        >
          {name}
        </Typography>
        <Box
          sx={{
            width: { xs: "300px", md: "500px" },
            height: { xs: "400px", md: "800px" },
          }}
        >
          <Image
            loader={() => imageLoader(image)}
            src={`s3`}
            height={400}
            width={400}
            alt="image"
          />{" "}
        </Box>
      </Paper>
    )
  );
};

export default Product;
