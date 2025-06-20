import './Page3.css'
import { CustomButton } from './components/CustomButton'
function Page3() {

  const names = ['Products', 'Services', 'Overview', 'Support', 'Shop', 'Contact']
  const options =['op1','op2','op3','op4']

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
        <div className='QB'>1. Do you have heriditary hairfall? </div>
        <div className='options'>
          {options.map((option)=> <div key ={option} className='question-options'>{option}</div>)}
        </div>
      </div>
      <div className='arrow'>
        <div className='right-arrow'>&rarr;</div>
      </div>
      
      

    </>
  )
}

export default Page3
