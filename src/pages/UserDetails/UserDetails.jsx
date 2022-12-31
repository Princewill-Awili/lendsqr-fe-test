import './userdetails.css'

import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import backIcon from '../../assets/icons/backArrow.svg'
import avatarIcon from '../../assets/icons/avatar.svg'
import starFill from '../../assets/icons/starFill.svg'
import starOutline from '../../assets/icons/starOutline.svg'
import { randomBank, maritalStatus } from '../../utils/helperFuncs'

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Subsection from '../../components/SubSection/Subsection'


const UserDetails = () => {

  const [activeUserMenu, setActiveUserMenu] = useState('general');
  const [selectedUser,setSelectedUser] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    setSelectedUser(JSON.parse(localStorage.getItem('selectedUser')));
  },[])

  return (
    <div className='userDetails'>
      <Topbar/>
      <Sidebar/>
      <div className="userInfo">

        <div className="back" onClick={()=> {
          navigate('/dashboard')
        }}>
          <img src={backIcon} alt="icon"/>
          <span className="backTxt">Back to Users</span>
        </div>

        <div className="userActions">
          <h2 className="userDetailsTitle">User Details</h2>
          <div className="actionBtns">
            <span className="blacklistBtn actionBtn">BLACKLIST USER</span>
            <span className="activateBtn actionBtn">ACTIVATE USER</span>
          </div>
        </div>

        <div className="quickInfo">

          <div className="qiTop">
            <img src={selectedUser ? selectedUser?.profile?.avatar : (<img src={avatarIcon} alt="icon"/>)} alt="icon" className='userAvatar'/>
            <div className="qiTopOne">
              <h2 className="qiName">{`${selectedUser?.profile?.firstName} ${selectedUser?.profile?.lastName}`}</h2>
              <p className="qiId">{selectedUser?.accountNumber}</p>
            </div>

            <div className="usersTier">
              <p className="usersTierTxt">User's Tier</p>
              <div className="stars">
                <img src={starFill} alt="star" />
                <img src={starOutline} alt="star" />
                <img src={starOutline} alt="star" />
              </div>
            </div>

            <div className="acctDetails">
              <div className="acctBalance">
                {` ₦ ${selectedUser?.accountBalance}`}
              </div>
              <div className="acctMisc">
                {`${selectedUser?.profile?.bvn}/${randomBank()}`}
              </div>
            </div>

          </div>

          <div className="qiBottom">
            <div 
              className={activeUserMenu === 'general'? "qiBottomItem qibActive": "qiBottomItem"}
            >
                General Details
            </div>
            <div className="qiBottomItem">Documents</div>
            <div className="qiBottomItem">Bank Details</div>
            <div className="qiBottomItem">Loans</div>
            <div className="qiBottomItem">Savings</div>
            <div className="qiBottomItem">App  and System</div>
          </div>
        </div>

        <div className="mainInfo">
          <Subsection 
              subsectionTitle="Personal Information" 
              content={[
                    {title:"Full name", value:`${selectedUser?.profile?.firstName} ${selectedUser?.profile?.lastName}`},
                    {title:"Phone Number", value:selectedUser?.profile?.phoneNumber},
                    {title: "Email Address", value: selectedUser?.email},
                    {title:"BVN", value:selectedUser?.profile?.bvn},
                    {title: "Gender", value: selectedUser?.profile?.gender},
                    {title: "Marital Satus", value: maritalStatus()},
                    {title:"Children" , value:"None"},
                    {title:"Type of Residence", value:"Apartment Block"}
                      ]}
          />
          <Subsection 
            subsectionTitle="Education and Employment"
            content={
                [
                    {title:"Level of Education", value:selectedUser?.education?.level },
                    {title:"Sector of employment", value: selectedUser?.education?.sector},
                    {title:"Duration of Employment", value:selectedUser?.education?.duration},
                    {title:"Office Email", value: selectedUser?.education?.officeEmail},
                    {title:"Monthly Income",value: `₦${selectedUser?.education?.monthlyIncome[1]} - ₦${selectedUser?.education?.monthlyIncome[0]}`},
                    {title:"loan Repayment" , value:selectedUser?.education?.loanRepayment}
                ]
            }
          />
          <Subsection
            subsectionTitle="Socials"
            content={
                [
                    {title:"Twitter", value:selectedUser?.socials?.twitter},
                    {title:"Facebook", value:selectedUser?.socials?.facebook},
                    {title:"Instagram", value:selectedUser?.socials?.instagram}
            ]
            }
          />

          <Subsection
              subsectionTitle="Gurantor"
              content={
                  [
                      {title:"Full name", value:`${selectedUser?.guarantor?.firstName} ${selectedUser?.guarantor?.lastName}`},
                      {title:"Phone Number", value:selectedUser?.guarantor?.phoneNumber},
                      {title:"Email Address", value:"debby@gmail.com"},
                      {title:"Relationship", value:'Sister'}
              ]
              }
          />

        </div>


      </div>
    </div>
  )
}

export default UserDetails