import { useEffect, useState } from "react"
import { HeaderNavigations } from "../components/HeaderNavigations"
import { useNavigate } from "react-router-dom";
import type { DataPoint } from "./graph";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { CustomButton } from "../components/CustomButton";

// import '../styles/Page4.css'
function Page7() {

  const navigate = useNavigate()

  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(() => [{ time: "Blood", value: Math.random() * 10 },
      { time: "Oxygen", value: Math.random() * 10 },
      { time: "Calcium", value: Math.random() * 10 },
      { time: "Melanin", value: Math.random() * 10 }
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='nav-bar'>
        <HeaderNavigations />
        <div className='join'>
          <CustomButton label={"Home"} scale={1}></CustomButton>
        </div>
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
            <div className="bar-wrapper">
              <BarChart className="bar-graph" width={500} height={300} data={data}>
                {/* <CartesianGrid stroke="#ccc" /> */}
                <XAxis dataKey="time" />
                {/* <YAxis /> */}
                <Tooltip />
                <Bar dataKey="value" fill="#6660e2ff" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default Page7
