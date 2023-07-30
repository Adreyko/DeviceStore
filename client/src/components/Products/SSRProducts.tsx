import React, { useEffect } from "react";
import Products from "./Products";
import { getData } from "@/api/getData";
import { reduxStore } from "@/redux/store/store";
import { setDevices } from "@/redux/slices/storeSlice";
import { IDevice } from "@/interfaces/IDevices";
import { useAppDispatch } from "@/redux/hooks/redux-hook";

const SSRProducts = ({ devices }: IDevice | any) => {

  return (
    <div>
      <Products devices={devices}/>
    </div>
  );
};

export default SSRProducts;
