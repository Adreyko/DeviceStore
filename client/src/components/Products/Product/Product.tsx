"use client";
import React, {useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import { styles } from "../styles/muiStyles";
import { IDevice } from "@/interfaces/IDevices";
import useCartController from "@/hooks/useCartConrollert";
import {  useAppSelector } from "@/redux/hooks/redux-hook";


const Device = ({
  price,
  name,
  image,
  _id,
  availability,
  category,
}: IDevice) => {
  const [hovered, setHovered] = useState<string | null>(null);


  const { addToCartHandler, removeFromCartHandler } = useCartController();
  const cart = useAppSelector((cart) => cart.cart.cart);
  const isInCart = cart.find((el) => el?._id == _id);

  return (
    <Grid
      sx={styles.gridStyle}
      item
      lg={3}
      xl={2}
      key={_id}
      onMouseEnter={() => setHovered(name)}
      onMouseLeave={() => setHovered(null)}
    >
      <Box
        sx={availability ? styles.boxStylesDevice : styles.boxStylesNotAvaible}
      >
        <Image alt="image" src={`/images/${image}`} width={200} height={200} />
        <Typography component="div" variant="h6">
          {name.length > 30 ? `${name.slice(0, 28)}...` : name}
        </Typography>
        {!hovered && (
          <Typography component="div" variant="h6" sx={{ color: "#bb3033" }}>
            {price}$
          </Typography>
        )}
        {hovered == name && (
          <>
            {availability ? (
              <>
                <Link href={`/${category.toLocaleLowerCase()}/${_id}`}>
                  <Button sx={styles.button} variant="contained">
                    Detail
                  </Button>
                </Link>
                {isInCart ? (
                  <Button
                    sx={{ paddingX: "40px" }}
                    color="success"
                    variant="contained"
                    onClick={() => removeFromCartHandler(_id)}
                  >
                    Added
                  </Button>
                ) : (
                  <Button
                    onClick={() => addToCartHandler(_id)}
                    color="error"
                    variant="contained"
                  >
                    Add to cart
                  </Button>
                )}
              </>
            ) : (
              <Typography
                sx={{ opacity: 1 }}
                color={"#FF69B4"}
                component="div"
                variant="h6"
              >
                NOT AVAIBLE
              </Typography>
            )}
          </>
        )}
      </Box>
    </Grid>
  );
};

export default Device;
