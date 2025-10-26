import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HeaderNavigations } from "../components/HeaderNavigations"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HealthinatoAPI } from "../api/apiCall";

// import '../styles/Page3.css'
function Page3() {

  // const options = ['Answer', 'Answer', 'Answer', 'Answer']

  // const questions = [
  //   {
  //     question: 'What is the condition of your hairfall currently ?',
  //     options: ["Have too much harifall", "Have minor hairfall", "Have little to no hairfall", "None of the above"]
  //   },
  //   {
  //     question: 'What degree of damage do you have ?',
  //     options: ["Thinned up hair", "Dandruff on the scalp", "Itchy scalp and irritation", "None of the above"]
  //   },
  //   {
  //     question: 'What kind of food do you eat ?',
  //     options: ["Healthy dietary food", "Outside restaurant food", "Processed or packed foods", "None of the above"]
  //   },
  //   {
  //     question: 'How well do you exercise ?',
  //     options: ["Exercise all the time", "Rarely exercise", "Exercise only on a few occasions", "None of the above"]
  //   }
  // ]

  const navigate = useNavigate()

  const [counter, setCounter] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(
    {
      question: 'What is the condition of your hairfall currently ?',
      options: ["Have too much harifall", "Have minor hairfall", "Have little to no hairfall", "None of the above"]
    })
  const [selected, setSelected] = useState("")

  const [loading, setLoading] = useState(false)


  const handleClick = () => {
    setLoading(true)
    if (counter === 3) {
      navigate("/fourth")
    } else {
      // setCurrentQuestion(questions[counter + 1])
      HealthinatoAPI.questionsAPI(currentQuestion.question, selected).then((response) => {
        console.log("This is the response")
        console.log(response.data)
        setCurrentQuestion(response.data)
      }).finally(()=>setLoading(false))
      setCounter(counter + 1)
    }
    setSelected("")
  }

  return (
    <>
      <div className='nav-bar'>
        <HeaderNavigations />
      </div>

      {loading && <div className="rotating-center" style={{height:'80vh'}}>
        <div className="cover-circle"></div>
        <div>
          <img className="rotating-icon1" src="/assets/images/small_plus.svg">
          </img>
        </div>
      </div>}

      {!loading && <>
        <div className='HairLoss'>
          <div className='one-word'>
            <img className="rotating-icon" src="/assets/images/small_plus.svg"></img>
            Please answer these questions</div>
        </div><div className='qbox'>
          <div className='QB'>
            <div className="question">
              {counter + 1}. {currentQuestion.question}
            </div>
          </div>
          <div className='options'>
            {currentQuestion.options.map((option) => <div key={option}
              onClick={() => {
                setSelected(option);
              }} className={`question-options ${selected === option ? "selected" : ""}`}>{option}</div>)}
          </div>
        </div><div className='arrow' onClick={handleClick}>
          <div className='right-arrow'>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </>
      }



    </>
  )
}

export default Page3
