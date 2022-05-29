import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

import styles from "./Chart.module.scss";

const dataSet = [
  {
    name: "Html,CSS",
    skill: 20,
    fill: "#BAD3FF",
  },
  {
    name: "React",
    skill: 50,
    fill: "#A4C6FF",
  },
  {
    name: "Typescript",
    skill: 10,
    fill: "#8EB8FF",
  },
  {
    name: "Node.js",
    skill: 5,
    fill: "#75A9FF",
  },
  {
    name: "MySQL",
    skill: 5,
    fill: "#5D99FF",
  },
];

export const Chart = () => {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={200}
          layout="vertical"
          data={dataSet}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <XAxis type="number" unit="%" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" />
          <Bar dataKey="skill" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
