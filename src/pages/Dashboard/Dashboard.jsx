import './dashboard.css'
import smallLogo from '../../assets/images/logo.svg'
import searchIcon from '../../assets/icons/SearchIcon.svg'
import {MdOutlineNotifications as NotificationIcon} from 'react-icons/md'
import userPic from '../../assets/images/userPic.svg'
import ArrowDown from '../../assets/icons/arrowDown.svg'

import Sidebar from '../../components/Sidebar/Sidebar'

const Dashboard = () => {

  

  return (
    <div className='dashboard'>
      <div className="topbar">
        <img src={smallLogo} alt="lendsqr logo" className='smLogo' />

        <div className="searchBox">
          <input type="text" className="searchBar" placeholder='Search for anything' />
          <div className="searchBtn">
            <img src={searchIcon} alt='search icon' className='searchIcon'/>
          </div>
        </div>

        <div className="topbarRight">
          <p className="docs">Docs</p>
          <NotificationIcon className='notIcon'/>
          <img src={userPic} alt="user pic" className='userPic'/>
          <p className="userName">Adedeji</p>
          <img src={ArrowDown} alt='arrowDown' className='arrowDown'/>
        </div>

        <Sidebar/>

      </div>

    </div>
  )
}

export default Dashboard