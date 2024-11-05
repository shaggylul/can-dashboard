import { createArray } from "@/shared/utils/create-array";
import { getMinNumber } from "@/shared/utils/get-min";
import { pickInArray } from "@/shared/utils/pick-in-array";

import { decEngineSpeed } from "./engine-speed";
// import { decFuel } from "./fuel";
import { decFuelEco } from "./fuel-eco";
import { decFuelRate } from "./fuel-rate";
import { decSpeed } from "./speed";

const DEC_ENGINE_RATE_MS = 20
// const DEC_FUEL_RATE_MS = 1000
const DEC_FUEL_ECONOMY_RATE_MS = 100
const DEC_SPEED_RATE_MS = 100

const clearedDecEngineSpeed = pickInArray(decEngineSpeed, 1000 / DEC_ENGINE_RATE_MS)
// const clearedDecFuel = pickInArray(decFuel, 1000 / DEC_FUEL_RATE_MS)
const clearedDecFuelEco = pickInArray(decFuelEco, 1000 / DEC_FUEL_ECONOMY_RATE_MS)
const clearedDecFuelRate = pickInArray(decFuelRate, 1000 / DEC_FUEL_ECONOMY_RATE_MS)
const clearedDecSpeed = pickInArray(decSpeed, 1000 / DEC_SPEED_RATE_MS)

const dashboardItemCount = getMinNumber([
  clearedDecEngineSpeed.length,
  // clearedDecFuel.length,
  clearedDecFuelEco.length,
  clearedDecFuelRate.length,
  clearedDecSpeed.length,
]);

const arr = createArray(dashboardItemCount);

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
    ms:idx*1000,
    engineSpeed: clearedDecEngineSpeed[idx],
    fuelEco: clearedDecFuelEco[idx],
    fuelRate: clearedDecFuelRate[idx],
    // fuel: decFuel[idx],
    speed: clearedDecSpeed[idx],
  };
});
