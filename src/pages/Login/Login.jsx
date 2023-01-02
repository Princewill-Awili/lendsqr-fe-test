import { useState, useContext, useEffect } from 'react'
import { states } from '../../utils/context'
import './login.css'
import Logo from '../../assets/images/logo.svg'
import Doodle from '../../assets/images/loginDoodle.svg'
import { fetchData } from '../../utils/fetchData'
import Input from '../../components/Input/Input'

import { useNavigate } from 'react-router-dom'



const Login = () => {

     const {userEmail, userPassword, setLoading, setIsLoggedIn} = useContext(states);
     const navigate = useNavigate();
     const [error, setError] = useState(false);

     useEffect(()=>{
          const storedUsers = JSON.parse(localStorage.getItem('users'));
          if(storedUsers){
               console.log('Users Already Available!')
          }else{
               console.log('Log in!')
          }
     },[]);

     const handleLogin = () => {
          if(userEmail.length > 0 && userPassword.length > 0){
               //1. Set Login State to True and store in localStorage
               setIsLoggedIn(true);
               localStorage.setItem('isLoggedIn','true')
               // 2. Show loading state.
               setLoading(true);

               // 3.Fetch Data from API and place in Local Storage.
               fetchData();

               //4. Stop loading state.
               // 5. Navigate to Dashboard.

               setTimeout(()=>{
                    setLoading(false);
                    navigate('/dashboard');
               },1000);

          }else{
               // Throw an Error to user
               setError(true);
          }
     }

  return (
    <div className='login'>
     <div className="loginLeft">
          <img src={Logo} alt='lendsqr logo' className='logo'/>
          <img src={Doodle} alt='lendsqr doodle' className='doodle'/>
     </div>
     <div className="loginRight">
          <h2 className="welcomeTxt">Welcome!</h2>
          <p className="enterTxt">Enter Details to login</p>
          <div className="loginForm">
               {error && (<p className='error'>Error...Ensure you typed correct credentials!</p>)}
               <Input type="text" placeholder='Email' />
               <Input type="password" placeholder='Password'/>
               <p className="forgot">FORGOT PASSWORD?</p>
               <div className="loginBtn" onClick={handleLogin}>LOG IN</div>
          </div>
     </div>
    </div>
  )
}

export default Login