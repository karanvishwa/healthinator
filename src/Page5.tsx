import './Page5.css'
import { CustomButton } from './components/CustomButton'
function Page5() {

  const names = ['Products', 'Services', 'Overview', 'Support', 'Shop', 'Contact']
  const options =['op1','op2','op3','op4']

  const handleClick = () => {
    alert("clicked!")
  };
  return (
    <>
      <div className='nav-bar'>
        {names.map((name) => <div key={name} className='nav-options'>{name}</div>)}
      </div>
      <div className='HairLoss'>
        <div className='one-word'> Please answer these questions</div>
      </div>
      <div className='qbox'>
        {/* <div className='questionbox'>Question description
         <div className='Q'>
          {qboxes.map((B)=> <div key={B} className='QB'></div>)}
         </div> 
        </div> */}
        <div className='QB'>ChatBots Question</div>
        <div className='line'></div>
        <div className='options'>
        
        <textarea id="text-box" className='textbox' placeholder='Text Here'></textarea>
        
        </div>
      </div>
      
      <div className='arrow'>
        <div className='right-arrow' onClick={handleClick}>SUBMIT</div>
      </div>
      
      

    </>
  )
}

export default Page5