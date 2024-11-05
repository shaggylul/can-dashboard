import { createArray } from "@/shared/utils/create-array";
import { getMinNumber } from "@/shared/utils/get-min";

import { decEngineSpeed } from "./engine-speed";
import { decFuel } from "./fuel";
import { decFuelEco } from "./fuel-eco";
import { decFuelRate } from "./fuel-rate";
import { decSpeed } from "./speed";

const dashboardItemCount = getMinNumber([
  decEngineSpeed.length,
  decFuel.length,
  decFuelEco.length,
  decFuelRate.length,
  decSpeed.length,
]);

const arr = createArray(1000);

interface Data {
  engineSpeed: number;
  fuelEco: number;
  fuelRate: number;
  // fuel: number;
  speed: number;
}

export const data: Data[] = arr.map((_, idx) => {
  return {
    idx,
    engineSpeed: decEngineSpeed[idx],
    fuelEco: decFuelEco[idx],
    fuelRate: decFuelRate[idx],
    // fuel: decFuel[idx],
    speed: decSpeed[idx],
  };
});
