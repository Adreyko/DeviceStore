import React from "react";
import { Button } from "@mui/material";
import useCartController from "@/hooks/useCartConrollert";
import { cartStyles } from "../../CartStyles";
const RemoveButton = ({ id }: string | any) => {
  const { removeFromCartHandler } = useCartController();
  return (
    <>
      <Button
        onClick={() => removeFromCartHandler(id)}
        sx={cartStyles.cartRemoveButtonStyle}
        color="error"
        variant="contained"
      >
        Remove
      </Button>
    </>
  );
};

export default RemoveButton;
