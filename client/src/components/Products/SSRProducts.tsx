import React from "react";
import Products from "./Products";
import { IDevice } from "@/interfaces/IDevices";


const SSRProducts = ({ devices }: IDevice | any) => {

  return (
    <div>
      <Products devices={devices}/>
    </div>
  );
};

export default SSRProducts;
