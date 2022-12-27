import { useState } from 'react'
import './input.css'

const Input = ({type,placeholder}) => {

     const [showInputType, setShowInputType] = useState(false)

  return (
    <div className='inputs'>
     {type === 'password' ? (
          <>
               <input type={showInputType ? "text":"password" } className='loginInput' placeholder={placeholder} />
               <p className="show" onClick={()=> setShowInputType(!showInputType)}>SHOW</p>
          </>
     ) : (
          <>
               <input type='text' className='loginInput' placeholder={placeholder}/>
          </>
     )}
    </div>
  )
}

export default Input