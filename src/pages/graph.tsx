import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Bar, BarChart, ResponsiveContainer } from "recharts";

// Define type for each point
export type DataPoint = { 
  time: string;
  value: number;
};

export default function LiveGraph() {
  // Tell React our state is an array of DataPoint
  const [data, setData] = useState<DataPoint[]>([]);
  const data1 = [
  {
    name: "Cholesterol",
    red: 40,
    blue: 30,
    green: 30
  }
];

  // useEffect(() => {
  //   let x = 0;
  //   const interval = setInterval(() => {
  //     setData((prev) => [...prev, { time: "name", value: Math.random() * 10 }]);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <><LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
     <div className="V-box">
      <div className="vitamin">Cholesterol</div>
      <div className="v-a" style={{ width: "500px", height: "25px"}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data1}
            layout="vertical"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            {/* Hide axes since we only want a clean percentage bar */}
            <XAxis type="number" domain={[0, 100]} hide  />
            <YAxis type="category" dataKey="name" hide />
            
            {/* Stacked segments */}
            <Bar className="left-side" dataKey="red" stackId="a" fill="red" />
            <Bar dataKey="blue" stackId="a" fill="blue" />
            <Bar dataKey="green" stackId="a" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
}
