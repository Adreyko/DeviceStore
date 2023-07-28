import React from "react";
import Cart from "@/components/Cart/Cart";
import { reduxStore } from "@/redux/store/store";
import { getData } from "@/api/getData";
import { setDevices } from "@/redux/slices/storeSlice";
const CartContainer = async () => {
  const data = await getData();

  reduxStore.dispatch(setDevices(data));
  return (
    <>
      <Cart devices = {reduxStore.getState().devices.devices} />
    </>
  );
};

export default CartContainer;
