import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HeaderNavigations } from "../components/HeaderNavigations"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

// import '../styles/Page3.css'
function Page3() {

  const options = ['Answer', 'Answer', 'Answer', 'Answer']

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/fourth")
  }

  return (
    <>
      <div className='nav-bar'>
        <HeaderNavigations />
      </div>

      <div className='HairLoss'>
        <div className='one-word'>
          <img className="rotating-icon" src="/assets/images/small_plus.svg"></img>
          Please answer these questions</div>
      </div>
      <div className='qbox'>
        <div className='QB'>
          <div className="question">
            1. Do you have heriditary hairfall?
          </div>
        </div>
        <div className='options'>
          {options.map((option) => <div key={option} className='question-options'>{option}</div>)}
        </div>
      </div>
      <div className='arrow' onClick={handleClick}>
        <div className='right-arrow'>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>



    </>
  )
}

export default Page3
