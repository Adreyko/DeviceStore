import React from "react";
import Main from "./Main";
import { IDevice } from "@/interfaces/IDevices";
function SSRMain({ devices }: IDevice[] | any ) {
console.log(devices)
  return (
    <div>
      <Main devices={devices} />
    </div>
  );
}

export default SSRMain;
