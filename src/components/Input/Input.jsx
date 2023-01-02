import { useState, useContext } from 'react'
import './input.scss'
import { states } from '../../utils/context'

const Input = ({type,placeholder}) => {

     const [showInputType, setShowInputType] = useState(false)

     const {userEmail, setUserEmail, userPassword, setUserPassword} = useContext(states)

  return (
    <div className='inputs'>
     {type === 'password' ? (
          <>
               <input 
                    type={showInputType ? "text":"password" } 
                    className='loginInput' 
                    placeholder={placeholder} 
                    value={userPassword}
                    onChange={(e)=> setUserPassword(e.target.value)}
               />
               <p className="show" onClick={()=> setShowInputType(!showInputType)}>SHOW</p>
          </>
     ) : (
          <>
               <input 
                    type='text' 
                    className='loginInput' 
                    placeholder={placeholder}
                    value={userEmail}
                    onChange={(e)=> setUserEmail(e.target.value)}
               />
          </>
     )}
    </div>
  )
}

export default Input