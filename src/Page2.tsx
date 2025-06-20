import './Page2.css'
import health from './assets/images/Health_icon_svg.svg'
import hair from './assets/images/hair.svg'
import { CustomButton } from './components/CustomButton'
function Page2() {

  const names = ['Products', 'Services', 'Overview', 'Support', 'Shop', 'Contact']
  const categories = ['Categories']
  const BOX =['Hair Loss','Acne','Allergies','etc','etc','etc','Acne','etc']


  return (
    <>
      <div className='nav-bar'>
        {names.map((name) => <div key={name} className='nav-options'>{name}</div>)}
      </div>
      <div className='categories'>
        {categories.map((category)=> <div key={category} className='one-word'>{category}</div>)}
      </div>
      <div className='box'>
        {BOX.map((B)=> <div key={B} className='hairbox'>
         <img className='hair-icon' src={hair}>
         </img>
         <span >{B}</span>
        </div>)}
      </div>
      

      

    </>
  )
}

export default Page2
