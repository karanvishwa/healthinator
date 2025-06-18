import './App.css'
import health from './assets/images/Health_icon_svg.svg'
import { CustomButton } from './components/CustomButton'
function App() {

  const names = ['Products', 'Services', 'Overview', 'Support', 'Shop', 'Contact']

  return (
    <>
      <div className='nav-bar'>
        {names.map((name) => <div key={name} className='nav-options'>{name}</div>)}
        <div className='join'>
          <CustomButton label={"Join"} scale={1}></CustomButton>
        </div>
      </div>

      <img className='health-icon' src={health}></img>

      <div className='main-text'>
        <span className='sub-header-content'>Know your </span>
        <span className='health-label'>HEALTH</span>
        <br></br>
        <span className='learn-more-label' >
          <span>&rarr; </span>
          <span className='lm'>Learn More</span>
        </span>
      </div>

      <div className='try-now-button'>
      <CustomButton label={"Try Now"} scale={1.8} width='170px'></CustomButton>
      </div>

    </>
  )
}

export default App
