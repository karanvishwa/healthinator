import { useEffect } from "react"
import { HeaderNavigations } from "../components/HeaderNavigations"
import { useNavigate } from "react-router-dom";

// import '../styles/Page4.css'
function Page6() {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(()=>navigate("/seventh"),6000)
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
      <div className="rotating-center">
        <div className="cover-circle"></div> 
        <div>
          <img className="rotating-icon1" src="/assets/images/small_plus.svg">
          </img>
        </div>
      </div>

    </>
  )
}

export default Page6
