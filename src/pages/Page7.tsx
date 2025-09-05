import { useEffect, useState } from "react"
import { HeaderNavigations } from "../components/HeaderNavigations"
import { useNavigate } from "react-router-dom";
import type { DataPoint } from "./graph";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

// import '../styles/Page4.css'
function Page7() {

  const navigate = useNavigate()

//   useEffect(() => {
//     setTimeout(()=>navigate("/seventh"),6000)
//   }, []);
    const [data, setData] = useState<DataPoint[]>([]);
    
      useEffect(() => {
        let x = 0;
        const interval = setInterval(() => {
          setData((prev) => [...prev, { time: x++, value: Math.random() * 10 }]);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <>
        <div className='nav-bar'>
            <HeaderNavigations />
        </div>
        <div className='one-word'>
            <img className="rotating-icon" src="/assets/images/small_plus.svg"></img>
            Response
        </div>
        <div className="m-container">
            <div className="box1">
            <div className="left-wraper">
                <div className="main-d">Main disorder</div>
                <div className="sub-d">Sub disorder</div>
            </div>
            
            <div className="right-wraper">
                <BarChart className="bar-graph" width={400} height={200} data={data}>
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#6660e2ff" />
                </BarChart>
            </div>              
        </div>
        </div>
        
         
            
    
    </>
  )
}

export default Page7
