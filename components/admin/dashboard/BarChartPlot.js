import React from 'react';
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarChartPlot = () => {
  const data = [
    {
        name: "Sunday",
        ThisWeek: 4000,
        LastWeek: 2400
    },
    {
        name: "Monday",
        ThisWeek: 5000,
        LastWeek: 1500
    },
    {
        name: "Tuesday",
        ThisWeek: 6000,
        LastWeek: 3000
    },
    {
        name: "Wednesday",
        ThisWeek: 6500,
        LastWeek: 4500
    },
    {
        name: "Thursday",
        ThisWeek: 2000,
        LastWeek: 4200
    },
    {
        name: "Friday",
        ThisWeek: 8000,
        LastWeek: 3500
    },
    {
        name: "Saturday",
        ThisWeek: 7400,
        LastWeek: 5500
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={100} height={50} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ThisWeek" fill="#195190" barRadius={[5, 5, 0, 0]} />
          <Bar dataKey="LastWeek" fill="#A2A2A1" barRadius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartPlot;
