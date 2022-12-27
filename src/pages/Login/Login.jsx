import './login.css'
import Logo from '../../assets/images/logo.svg'
import Doodle from '../../assets/images/loginDoodle.svg'

import Input from '../../components/Input/Input'

const Login = () => {
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
               <Input type="text" placeholder='Email' />
               <Input type="password" placeholder='Password'/>
               <p className="forgot">FORGOT PASSWORD?</p>
               <div className="loginBtn">LOG IN</div>
          </div>
     </div>
    </div>
  )
}

export default Login