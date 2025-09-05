import { HeaderNavigations } from "../components/HeaderNavigations";

// import '../styles/Page5.css'
function Page5() {

  const options = ['op1', 'op2', 'op3', 'op4']

  const handleClick = () => {
    alert("clicked!")
  };
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
            ChatBots Questions
          </div>
        </div>
        <div className='options'>
          <textarea id="text-box" className='textbox' placeholder='Text Here'></textarea>
        </div>
      </div>

      <div className='arrow' style={{ width: '150px' }}>
        <div className='right-arrow' style={{ transform: 'scale(2.5)' }} onClick={handleClick}>SUBMIT</div>
      </div>
    </>
  )
}

export default Page5