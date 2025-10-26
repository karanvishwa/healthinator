import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts"


export const LineGraph=(data1: any[] | undefined)=>{
    
   
    return <div className="v-a" style={{ width: "500px", height: "22px"}}>
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
}