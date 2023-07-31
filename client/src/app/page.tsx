import { getData } from "@/api/getAllProducts";
import { setDevices } from "@/redux/slices/storeSlice";
import { reduxStore } from "@/redux/store/store";
import SSRMain from "@/components/Main/SSRMain";
export default async function Home() {
  const data = await getData();

  reduxStore.dispatch(setDevices(data));
  return (
    <main>
      <SSRMain devices={reduxStore.getState().devices.devices} />
    </main>
  );
}
