import './dashboard.css'
import smallLogo from '../../assets/images/logo.svg'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="topbar">
        <img src={smallLogo} alt="lendsqr logo" className='smLogo' />

        <div className="searchBox">
          <input type="text" className="searchBar" />
        </div>

      </div>
    </div>
  )
}

export default Dashboard