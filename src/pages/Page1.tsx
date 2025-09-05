import health from '/assets/images/Health_icon_svg.svg'
import dna from '/assets/images/dna.svg'
import heart from '/assets/images/heart.svg'
import graph from '/assets/images/graph.svg'
// import "../styles/Page1.css"



import { CustomButton } from '../components/CustomButton'
import { HeaderNavigations } from '../components/HeaderNavigations'
import { useState } from 'react'

function Page1() {

  const [toggle, setToggle] = useState(false)

  const visibilityToggle:React.CSSProperties = {
    visibility: toggle ? "visible" : "hidden",
    opacity: toggle ? "1" : "0",
    transition: 'opacity 0.7s ease-in-out'
  }

  const visibilityToggleReversed:React.CSSProperties = {
    visibility: !toggle ? "visible" : "hidden",
    opacity: !toggle ? "1" : "0",
    transition: 'opacity 0.7s ease-in-out'
  }

  return (
    <>
      <div className='nav-bar'>
        <HeaderNavigations />
        <div className='join'>
          <CustomButton setToggle={setToggle} label={"Join"} scale={1}></CustomButton>
        </div>
      </div>

      <div className='main-body'>

        {<>

          <div className='left-content' style={visibilityToggleReversed}>

            <div className='main-text'>
              <span className='sub-header-content'>Know your </span>
              <span className='health-label'>HEALTH</span>
              <br></br>
              <span className='learn-more-label' >
                <span>&rarr; </span>
                <span className='lm'><a className='anchor-tag' style={{ color: "white" }} href='/details'>Learn More</a></span>
              </span>
            </div>

            <div className='bottom-descriptions'>

              <div className='individual-properties'>
                <img className='individual-img' src={graph}></img>
                <div className='individual-description'>
                  <h2><strong>Real Time Analysis</strong></h2>
                  <span>Fast actionable Insights without long wait times</span>
                </div>
              </div>

              <div className='individual-properties' style={{ gap: '20px' }}>
                <img className='individual-img' src={heart}></img>
                <div className='individual-description'>
                  <h2><strong>Personalised Health Insights</strong></h2>
                  <span>Tailored recommendations based on your data</span>
                </div>
              </div>

              <div className='individual-properties'>
                <img className='individual-img' src={dna}></img>
                <div className='individual-description'>
                  <h2><strong>Health Monitoring</strong></h2>
                  <span>Combining physical and other symptoms for accurate results</span>
                </div>
              </div>

            </div>
          </div>


          <div className='right-content'>
            <img className={`health-icon ${toggle ? "transitioned" : ""}`} src={health}></img>

            <div className='register-container' style={visibilityToggle}>
              <div className='registration-label'>Registration</div>
              <div className='labels username-field' style={{ fontSize: '20px', fontWeight: '800' }}>User Name</div>
              <input className='login-inputs username-field'></input>
              <div className='labels password-field' style={{ fontSize: '20px', fontWeight: '800' }}>Password</div>
              <input aria-label='password' className='login-inputs password-field'></input>
              <button className='registration-buttons'>REGISTER</button>
            </div>

            <div className='try-now-button' style={visibilityToggleReversed}>
              <CustomButton label={"Try Now"} scale={1.5} width='120px' navigateTo={'/second'}></CustomButton>
              {/* <CustomButton label={"Try Now"} scale={1} width='170px'></CustomButton> */}

            </div>
          </div>
        </>}
      </div>


    </>
  )
}

export default Page1
