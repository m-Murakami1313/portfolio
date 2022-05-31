import { PieChart, Pie, Text, ResponsiveContainer } from "recharts";

import styles from "./Chart.module.scss";

const dataSet = [
  {
    name: "Html,CSS",
    value: 20,
    fill: "#BAD3FF",
  },
  {
    name: "React",
    value: 50,
    fill: "#A4C6FF",
  },
  {
    name: "Typescript",
    value: 10,
    fill: "#8EB8FF",
  },
  {
    name: "Node.js",
    value: 5,
    fill: "#75A9FF",
  },
  {
    name: "MySQL",
    value: 5,
    fill: "#5D99FF",
  },
];

export const Chart = () => {
  const label = ({ name, value, cx, x, y }: any) => {
    const textAnchor = x > cx ? "start" : "end";
    return (
      <>
        <Text x={x} y={y} textAnchor={textAnchor} fill="black">
          {name}
        </Text>
        <Text
          x={x}
          y={y}
          dominantBaseline="hanging"
          textAnchor={textAnchor}
          fill="black"
        >
          {value}
        </Text>
      </>
    );
  };
  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
          <Pie
            data={dataSet}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={label}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
