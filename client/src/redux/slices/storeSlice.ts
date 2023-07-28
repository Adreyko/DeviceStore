import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDevice } from "@/interfaces/IDevices";


type DevicesType = IDevice[];

interface InitialStateI {
  devices: DevicesType;
  error: any;
  status: "loading" | "resolved" | "rejected" | null;
}

const initialState: InitialStateI = {
  status: null,
  error: null,
  devices: [],
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setDevices(state:InitialStateI, action : PayloadAction<IDevice[]>) {
      state.devices = action.payload;
    },
  },
});

export const { setDevices } = devicesSlice.actions;
export default devicesSlice.reducer