import './userdetails.css'

import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import backIcon from '../../assets/icons/backArrow.svg'


const UserDetails = () => {
  return (
    <div className='userDetails'>
      <Topbar/>
      <Sidebar/>
      <div className="userInfo">

        <div className="back">
          <img src={backIcon}/>
          <span className="backTxt">Back to Users</span>
        </div>

        <div className="userActions">
          <h2 className="userDetailsTitle">User Details</h2>
          <div className="actionBtns">
            <span className="blacklistBtn actionBtn">BLACKLIST USER</span>
            <span className="activateBtn actionBtn">ACTIVATE USER</span>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default UserDetails