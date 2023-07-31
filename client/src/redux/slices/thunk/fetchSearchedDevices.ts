// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { IDevice } from "@/interfaces/IDevices";
// import { setDevices } from "../storeSlice";
// import { getData } from "@/api/getAllProducts";
// import { searchProduct } from "@/api/search/searchProducts";
// export const fetchSearched = createAsyncThunk(
//   "devices/fetchDevices",
//   async (name: string, { dispatch }) => {
//     if (name !== "") {
//       const data: IDevice[] = await searchProduct(name);
//       dispatch(setDevices(data));
//     } else {
//       return [];
//     }
//   }
// );
