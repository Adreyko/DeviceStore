import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import HoveredCart from "@/components/Cart/HoveredCart/HoveredCart";
const Cart = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <Link href="/cart">
      <Box onMouseEnter={() => setOpenCart(true)}    onMouseLeave={() => setOpenCart(false)}>
        <Box sx={{ position: "relative", display: "flex" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "gray",
                cursor: "pointer",
              },
              cursor: "pointer",
            }}
          >
            Cart
          </Typography>
          <ShoppingCartIcon
            sx={{ color: "gray", marginLeft: "5px", cursor: "pointer" }}
          />
        </Box>
        {openCart && <HoveredCart openCart={openCart} setOpenCart={setOpenCart} />}
      </Box>
    </Link>
  );
};

export default Cart;
