import './users.css'
import Highlight from '../Highlight/Highlight'
import UsersDataGrid from '../UsersDataGrid/UsersDataGrid'

import hlUsers from '../../assets/icons/hlUsers.svg'
import hlActive from '../../assets/icons/hlActive.svg'
import hlLoans from '../../assets/icons/hlLoans.svg'
import hlSavings from '../../assets/icons/hlSavings.svg'
import { useState,useEffect } from 'react'



const Users = () => {

     const [allUsers, setAllUsers] = useState([]);

     useEffect(()=>{
          setAllUsers(JSON.parse(localStorage.getItem('users')));
     },[])

     const usersWithLoans = allUsers.filter(user =>JSON.parse(user.education.loanRepayment) > 0)
     const usersWithSavings = allUsers.filter(user => JSON.parse(user.education.monthlyIncome[1])>0)
     


  return (
    <div className='users'>
     <div className="userHighlights">
          <Highlight icon={hlUsers} txt='USERS' num={allUsers.length} color="#FCE8FF" />
          <Highlight icon={hlActive} txt='ACTIVE USERS' num={allUsers.length} color="#EEE8FF" />
          <Highlight icon={hlLoans} txt='USERS WITH LOANS' num={usersWithLoans.length} color="#FEEFEC"/>
          <Highlight icon={hlSavings} txt='USERS WITH SAVINGS' num={usersWithSavings.length} color="#FFEBF0" />
     </div>
     <UsersDataGrid users={allUsers}/>
    </div>
  )
}

export default Users