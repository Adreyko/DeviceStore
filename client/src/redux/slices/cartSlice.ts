import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDevice } from "@/interfaces/IDevices";

type DevicesType = IDevice[];

interface InitialStateI {
  cart: DevicesType ;
  error: any;
  status: "loading" | "resolved" | "rejected" | null;
}

const initialState: InitialStateI = {
  status: null,
  error: null,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: InitialStateI, action: PayloadAction<IDevice[]>) {
      state.cart = action.payload;
    },
    removeFromCart(state: InitialStateI, action: PayloadAction<string>) {
      state.cart = state.cart.filter((el) => el._id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
