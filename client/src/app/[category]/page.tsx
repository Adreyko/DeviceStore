
import React from "react";

import Products from "@/components/Products/Products";
import { getData } from "@/api/getData";
import { reduxStore } from "@/redux/store/store";
import { setDevices } from "@/redux/slices/storeSlice";
const Category = async () => {
  const data = await getData();

  reduxStore.dispatch(setDevices(data));
  return (
    <div>
      <Products devices={reduxStore.getState().devices.devices} />
    </div>
  );
};

export default Category;
