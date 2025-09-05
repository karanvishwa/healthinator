import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Define type for each point
export type DataPoint = { 
  time: number;
  value: number;
};

export default function LiveGraph() {
  // Tell React our state is an array of DataPoint
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    let x = 0;
    const interval = setInterval(() => {
      setData((prev) => [...prev, { time: x++, value: Math.random() * 10 }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}
