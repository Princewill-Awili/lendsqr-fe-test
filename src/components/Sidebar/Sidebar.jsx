import './sidebar.css'

import SidebarItem from '../SidebarItem/SidebarItem'

import Briefcase from '../../assets/icons/briefcase.svg'
import Arrow from '../../assets/icons/arrow2.svg'
import Home from '../../assets/icons/home1.svg'
import Users from '../../assets/icons/user-friends 1.svg'
import Gurantors from '../../assets/icons/users 1.svg'
import Loans from '../../assets/icons/sack 1.svg'
import Decisons from '../../assets/icons/handshake-regular 1.svg'
import PiggyBank from '../../assets/icons/piggy-bank 1.svg'
import LoanReqs from '../../assets/icons/loan.svg'
import Whitelist from '../../assets/icons/whitelist.svg'
import Karma from '../../assets/icons/karma.svg'

import Bank from '../../assets/icons/bank.svg'
import Coin from '../../assets/icons/coins.svg'
import Trans from '../../assets/icons/transactions.svg'
import Services from '../../assets/icons/services.svg'
import ServAccts from '../../assets/icons/usercog.svg'
import Scroll from '../../assets/icons/scroll.svg'
import Reports from '../../assets/icons/reports.svg'

import Prefs from '../../assets/icons/sliders.svg'
import Fees from '../../assets/icons/fees.svg'
import Clip from '../../assets/icons/clipboard.svg'


const Sidebar = () => {
  return (
    <div className='sidebar'>
     <SidebarItem icon={Briefcase} txt="Switch Organization" arrow={Arrow} type='switch'/>
        <SidebarItem icon={Home} txt="Dashboard" type='dash'/>

        <SidebarItem txt='CUSTOMERS' type='head'/>
        <SidebarItem icon={Users} txt='Users'/>
        <SidebarItem icon={Gurantors} txt="Gurantors"/>
        <SidebarItem icon={Loans} txt="Loan"/>
        <SidebarItem icon={Decisons} txt="Decision Models"/>
        <SidebarItem icon={PiggyBank} txt="Savings"/>
        <SidebarItem icon={LoanReqs} txt="Loan Requests"/>
        <SidebarItem icon={Whitelist} txt="Whitelist"/>
        <SidebarItem icon={Karma} txt="Karma"/>

        <SidebarItem txt='BUSINESS' type='head'/>
        <SidebarItem icon={Briefcase} txt='Organization'/>
        <SidebarItem icon={LoanReqs} txt="Loan Products"/>
        <SidebarItem icon={Bank} txt="Saving Products"/>
        <SidebarItem icon={Coin} txt="Fees and Charges"/>
        <SidebarItem icon={Trans} txt="Transactions"/>
        <SidebarItem icon={Services} txt="Services"/>
        <SidebarItem icon={ServAccts} txt="Service Account"/>
        <SidebarItem icon={Scroll} txt="Settlements"/>
        <SidebarItem icon={Reports} txt="Reports"/>

        <SidebarItem txt='SETTINGS' type='head'/>
        <SidebarItem icon={Prefs} txt='Preferences'/>
        <SidebarItem icon={Fees} txt="Fees and Prices"/>
        <SidebarItem icon={Clip} txt="Audit Logs"/>
    </div>
  )
}

export default Sidebar