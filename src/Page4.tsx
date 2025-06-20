import './Page4.css'
import { CustomButton } from './components/CustomButton'
function Page4() {

  const names = ['Products', 'Services', 'Overview', 'Support', 'Shop', 'Contact']
 

  return (
    <>
      <div className='nav-bar'>
        {names.map((name) => <div key={name} className='nav-options'>{name}</div>)}
      </div>
      <p className="color-rotate">Analysing the context and waiting for<br></br> response, please be patient</p>
      
      
      

    </>
  )
}

export default Page4
