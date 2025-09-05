// import '../styles/Page2.css'

import { useNavigate } from "react-router-dom"
import { HeaderNavigations } from "../components/HeaderNavigations"

function Page2() {

  const BOX = [['Hair Loss', 'hair'], ['Allergies', 'hand'], [], [], [], [], [], []]

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/third")
  }


  return (
    <>
      <div className='nav-bar'>
        <HeaderNavigations />
      </div>

      <div className='one-word'>
        <img className="rotating-icon" src="/assets/images/small_plus.svg"></img>
        Categories
        </div>
      <div className='box'>
        {BOX.map((B) =>
          <div className='hairbox' onClick={handleClick}>
            {B.length !== 0 ? <><img className='hair-icon' src={`/assets/images/${B[1]}.svg`} /><span >{B[0]}</span></> : "N.A"}
          </div>
        )}
      </div>
    </>
  )
}

export default Page2
