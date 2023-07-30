import React from "react";
import Main from "./Main";
import { IDevice } from "@/interfaces/IDevices";
function SSRMain({ devices }: IDevice[] | any ) {

  return (
    <div>
      <Main devices={devices} />
    </div>
  );
}

export default SSRMain;
