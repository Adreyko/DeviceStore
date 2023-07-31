import React from "react";
import { Button } from "@mui/material";
import useCartController from "@/hooks/useCartConrollert";
import { cartStyles } from "../../CartStyles";
const RemoveButton = ({ _id }: string | any) => {
  const { removeFromCartHandler } = useCartController();
  console.log(_id)
  return (
    <>
  
      <Button
        onClick={() => removeFromCartHandler(_id)}
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
