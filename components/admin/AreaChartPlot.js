import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartPlot = () => {
  const data = [
    {
      "month": "Jan",
      "Samsung": 200
    },
    {
      "month": "Feb",
      "Samsung": 80
    },
    {
      "month": "Mar",
      "Samsung": 800
    },
    {
      "month": "Apr",
      "Samsung": 390
    },
    {
      "month": "May",
      "Samsung": 480
    },
    {
      "month": "June",
      "Samsung": 380
    },
    {
      "month": "July",
      "Samsung": 430
    }
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A5472" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4A5472" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A5472" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4A5472" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
                    <Area type="monotone" dataKey="Samsung" stroke="#4A5472" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaChartPlot;
