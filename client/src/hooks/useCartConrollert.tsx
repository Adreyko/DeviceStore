import { IDevice } from "@/interfaces/IDevices";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/redux-hook";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
const useCartController = () => {
  const dispatch = useAppDispatch();
  const allDivices = useAppSelector((dev) => dev.devices.devices);
  const cart = useAppSelector((cart) => cart.cart.cart);
//init
  const addToCartHandler = (deviceId: string) => {
    const currentDevice: IDevice | any = allDivices?.find(
      (el) => el.id === deviceId
    );
    const isInCart = cart.find((el) => el?.id == deviceId);
    if (!isInCart) {
      dispatch(addToCart([...cart, { ...currentDevice, amount: 1 }]));
    } else if (isInCart) {
      const filteredArr = cart?.map((device) => {
        return currentDevice?.id === device.id
          ? { ...device, amount: device.amount + 1 }
          : device;
      });
      dispatch(addToCart(filteredArr));
    }
  };

  const decreaseAmount = (deviceId: string) => {
    const currentDevice: IDevice | any = allDivices?.find(
      (el) => el.id === deviceId
    );
    const filteredArr = cart?.map((device) => {
      return currentDevice?.id === device.id
        ? { ...device, amount: device.amount == 1 ? 1 : device.amount - 1 }
        : device;
    });
    dispatch(addToCart(filteredArr));
  };

  const removeFromCartHandler = (deviceId: string) => {
    dispatch(removeFromCart(deviceId));
  };

  return { addToCartHandler, removeFromCartHandler, decreaseAmount };
};
export default useCartController;
