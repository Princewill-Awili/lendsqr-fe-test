import './dashboard.css'

import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Section from '../../components/Section/Section'
import Login from '../Login/Login'

import { useEffect } from 'react'
import { useContext } from 'react'
import { states } from '../../utils/context'

const Dashboard = () => {

  const { isLoggedIn, setIsLoggedIn } = useContext(states)

  useEffect(()=>{
    const loginStatus = JSON.parse(localStorage.getItem('isLoggedIn'));
    setIsLoggedIn(loginStatus)
  },[])
  

  return (
    <>
      {
        isLoggedIn && (
          <div className='dashboard'>
            <Topbar/>
            <Sidebar/>
            <Section/>
          </div>
        )
      }
      {isLoggedIn === false && (<Login/>)}
    </>
    
    
  )
}

export default Dashboard