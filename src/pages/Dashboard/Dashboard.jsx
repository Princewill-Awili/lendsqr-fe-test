import './dashboard.css'

import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Section from '../../components/Section/Section'

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <Topbar/>
      <Sidebar/>
      <Section/>
    </div>
  )
}

export default Dashboard