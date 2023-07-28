import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDevice } from "@/interfaces/IDevices";
import { setDevices } from "../storeSlice";
import { getData } from "@/api/getData";
export const fetchDevices = createAsyncThunk(
  "devices/fetchDevices",
  async (_, { dispatch }) => {
    const data: IDevice[] = await getData();
    dispatch(setDevices(data));
  }
); 
