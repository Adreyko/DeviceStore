import { Box, Typography } from "@mui/material";
import React from "react";
import { cartStyles } from "../../CartStyles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useCartController from "@/hooks/useCartConrollert";

type PropType = {
  id: string;
  amount: number;
};
const AmountsButtons = ({ id, amount }: PropType) => {
  const { addToCartHandler, decreaseAmount } = useCartController();
  const increaseHandler = (devId: string) => {
    addToCartHandler(devId);
  };

  const decreaseHandler = (devId: string) => {
    decreaseAmount(devId);
  };

  return (
    <>
      <Box sx={cartStyles.cartAmountBoxStyle}>
        <RemoveIcon
          onClick={() => decreaseHandler(id)}
          sx={{
            cursor: "pointer",
            border: "1px solid gray",
            borderRadius: "10px",
          }}
        />
        <Typography placeholder="Amount" sx={{ marginX: "10px" }}>
          {amount}
        </Typography>
        <AddIcon
          onClick={() => increaseHandler(id)}
          sx={{
            cursor: "pointer",
            border: "1px solid gray",
            borderRadius: "10px",
          }}
        />
      </Box>
    </>
  );
};

export default AmountsButtons;
