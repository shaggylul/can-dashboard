import { Flex, ScrollArea, Title } from "@mantine/core";
import { AreaChart } from "@mantine/charts";

import { data } from "../config/data";

const dashboards = [
  // {
  //   label:"Скорость двигателя",
  //   name: "engineSpeed",
  //   color: "teal.6"
  // },
  {
    label:"Экономия топлива",
    name: "fuelEco",
    color: "blue.6"
  },
  {
    label:"Расход топлива",
    name: "fuelRate",
    color: "red.6"
  },
  // {
  //   label:"Топливо",
  //   name: "fuel",
  //   color: "orange.6"
  // },
  {
    label:"Скорость",
    name: "speed",
    color: "green.6"
  },
];

export const Dashboard = () => {
  const minWidth = data.length * 10;

  return (
    <Flex gap={32} direction="column">
      {dashboards.map((dashboard) => (
        <Flex key={dashboard.name} direction="column" gap={16}>
          <Title>{ dashboard.label}</Title>
          <ScrollArea scrollbars="x">
            <AreaChart
              h={1024}
              w={minWidth}
              data={data}
              dataKey="idx"
              series={[dashboard]}
              curveType="linear"
              tickLine="none"
              gridAxis="xy"
            />
          </ScrollArea>
        </Flex>
      ))}
    </Flex>
  );
};
