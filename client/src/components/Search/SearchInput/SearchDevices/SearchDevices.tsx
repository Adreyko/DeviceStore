import { IDevice } from "@/interfaces/IDevices";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
const SearchDevices: React.FC<IDevice> = ({
  _id,
  image,
  amount,
  name,
  price,
  category,
}) => {

  return (
    <Link href={`/${category.toLocaleLowerCase()}/${_id}`}>
      <Box
        sx={{
          display: "block",
          alignItems: "center",
          width: "100%",
          paddingY: "10px",
          borderBottom: "1px solid white",
        }}
      >
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
                {price}$
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default SearchDevices;
