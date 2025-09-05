import { useEffect } from "react"
import { HeaderNavigations } from "../components/HeaderNavigations"
import { useNavigate } from "react-router-dom";

// import '../styles/Page4.css'
function Page4() {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(()=>navigate("/fifth"),8000)
  }, []);


  return (
    <>
      <div className='nav-bar'>
        <HeaderNavigations />
      </div>
      <p className="color-rotate">Analysing the context and waiting for<br></br> response, please be patient</p>
    </>
  )
}

export default Page4
