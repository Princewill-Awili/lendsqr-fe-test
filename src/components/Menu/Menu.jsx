import './menu.scss'
import { useContext, useEffect } from 'react';
import { states } from '../../utils/context';
import { useNavigate } from 'react-router-dom';

import ViewIcon from '../../assets/icons/viewIcon.svg'
import BlacklistIcon from '../../assets/icons/blacklistIcon.svg'
import ActivateIcon from '../../assets/icons/activateIcon.svg'

import { fetchUserById } from '../../utils/fetchData';

const Menu = ({id, users}) => {
     
     
     const{currentRow, setCurrentRow, setLoading,pickedUser, setPickedUser} = useContext(states)
     const dist = (id*60);

     const navigate = useNavigate();

     const viewDetails = () => {
          fetchUserById(id);
          const selectedUser = users.find(user => user.id === id);
          setPickedUser(selectedUser);
          // localStorage.setItem('selectedUser',JSON.stringify(selectedUser))
          
          setLoading(true);

          setTimeout(()=>{
               setLoading(false);
               navigate(`/dashboard/users/${id}`);
          },1000);
     }

     useEffect(()=>{
          localStorage.setItem('selectedUser',JSON.stringify(pickedUser))
     },[pickedUser]);


  return (
     <div 
          className="menu" 
          style={{top:`${dist}px`, display: currentRow === id ? "flex": "none"}}
          onClick={()=> setCurrentRow(null)}
     >
          <div className="menuRow" onClick={viewDetails}>
               <img src={ViewIcon} alt="icon"/>
               <span>View Details</span>
          </div>
          <div className="menuRow">
               <img src={BlacklistIcon} alt="icon"/>
               <span>Blacklist User</span>
          </div>
          <div className="menuRow">
               <img src={ActivateIcon} alt="icon"/>
               <span>Activate User</span>
          </div>
     </div>
  )
}

export default Menu