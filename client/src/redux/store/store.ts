import {
  configureStore,
  type ConfigureStoreOptions,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import cartReducers from '../slices/cartSlice'
import deviceReducer from "../slices/storeSlice";
const reducer = deviceReducer;
const configreStoreDefaultOptions: ConfigureStoreOptions = { reducer };

export const makeReduxStore = (
  options: ConfigureStoreOptions = configreStoreDefaultOptions
) => {
  const store = configureStore(options);

  return store;
};

export const reduxStore = configureStore({
  reducer: {
    devices: deviceReducer,
    cart:cartReducers,
  },
});

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
