import { useEffect, useState } from "react"
import { HeaderNavigations } from "../components/HeaderNavigations"
import { useNavigate } from "react-router-dom";
import type { DataPoint } from "./graph";
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { CustomButton } from "../components/CustomButton";
import { LineGraph } from "../components/LineGraph";

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
      <div className="m-container">
        <div className="box1">
          <div className="left-wraper child" >
            <div className="column">
              <div className="V-box">
                <div className="vitamin"> Vitamin A </div>
                  {/* <LineGraph
                      data1 = { [
                      { name: 'Cholestrol',
                        red: 60,
                        blue:30,
                        green:10
                      } ] }/> */}
                </div>
              <div className="V-box">
                <div className="vitamin"> Vitamin B </div>
                  {/* <LineGraph/> */}
              </div>
              <div className="V-box">
                <div className="vitamin"> Vitamin C </div>
                  {/* <LineGraph/> */}
              </div>
              <div className="V-box">
                <div className="vitamin"> Cholestrol </div>
                  {/* <LineGraph/> */}
              </div>
            </div>
          </div>

          <div className="right-wraper child1">
            <div className="column child3">
              <div className="color-mark">
                <div className="color"> </div>
                <div className="moderate">Moderate</div>
              </div>
              <div className="color-mark">
                <div className="color c1"> </div>
                <div className="moderate">Safe</div>
              </div>
              <div className="color-mark">
                <div className="color c2"> </div>
                <div className="moderate">Danger</div>
              </div>
            </div>
          </div>  
        </div>
      </div>
      {/* box3 */}
       <div className="m-container">
        <div className="box3">
          <div className="left-wraper child5" >
            <div className="column1">
              <div className="R-box"> Remedies</div>
              <div className="red"></div>
              <div className="remedy-content"> The normal solution for hair fall would be to have a good diet and maintain good gut health and maintain good scalp hygiene</div>
              <div className="blue"></div>
              <div className="arrow-down">&rarr;</div>
              </div>
          </div>

          <div className="right-wraper child6">
            <div className="column child3">
              <img className="vegetable" src="assets\images\nutrients.svg"></img>
            </div>
          </div>  
        </div>
      </div>

      <div className="m-container">
        <div className="box4">
          <div className="left-wraper child5" >
            <div className="column1">
              <div className="C-box"> Contact</div>
              <div className="head-gray"></div>
              <div className="doctor-details1"> Doctor           :    Shreya </div>
              <div className="doctor-details1"> Address          :    AIT CKM </div>
              <div className="doctor-details1"> Specialization   :    Dermate </div>
              <div className="foot-gray"></div>
              <div className="arrow-down">&rarr;</div>
              </div>
          </div>

          <div className="right-wraper child6">
            <div className="column child3">
              <img className="profile" src="assets\images\profile.svg"></img>
            </div>
          </div>  
        </div>
      </div>
      <footer className="footer">
      <p className="P">© 2025 My Website | All Rights Reserved</p>
      
    </footer>
    </>
  )
}

export default Page7
