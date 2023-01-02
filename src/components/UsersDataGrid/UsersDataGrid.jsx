import {useState} from 'react';
import './usersdatagrid.css'

import { DataGrid } from '@mui/x-data-grid';
import { statusRandomizer, statusRender } from '../../utils/helperFuncs';
import MenuIcon from '../../assets/icons/dots.svg'
import FilterIcon from '../../assets/icons/filterIcon.svg'
import Menu from '../Menu/Menu';
import SortingForm from '../SortingForm/SortingForm';
import { useContext } from 'react';
import { states } from '../../utils/context';


const UsersDataGrid = ({users}) => {

     const{ setCurrentRow } = useContext(states);
     const [showSortingForm, setShowSortingForm] = useState(false);

     const cellStyle = {
          width:"100%",
          height:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          padding:"0px 2px",
          position: "relative",
          overflow:"visible"
     }



     const columns = [
                         {width:"240", headerName:'ORGANIZATION', field:'orgName', flex:1, cellClassName:"name-column--cell", renderHeader:()=>{
                              return (
                                   <div className='header' onClick={()=> setShowSortingForm(!showSortingForm)}>
                                        <span className='headerTxt'>ORGANIZATION</span>
                                        <img src={FilterIcon} alt="icon"/>
                                   </div>
                              )
                         }},
                         {width:"220", headerName:'USERNAME', field:'userName', flex:1, cellClassName:"name-column--cell",renderHeader:()=>{
                              return (
                                   <div className='header' onClick={()=> setShowSortingForm(!showSortingForm)}>
                                        <span className='headerTxt'>USERNAME</span>
                                        <img src={FilterIcon} alt="icon"/>
                                   </div>
                              )
                         }},
                         {width:"220", headerName:'EMAIL', field:'email', flex:1, cellClassName:"name-column--cell",renderHeader:()=>{
                              return (
                                   <div className='header' onClick={()=> setShowSortingForm(!showSortingForm)}>
                                        <span className='headerTxt'>EMAIL</span>
                                        <img src={FilterIcon} alt="icon"/>
                                   </div>
                              )
                         }},
                         {width:"230", headerName:'PHONE NUMBER', field:'phoneNumber', flex:1, cellClassName:"name-column--cell",renderHeader:()=>{
                              return (
                                   <div className='header' onClick={()=> setShowSortingForm(!showSortingForm)}>
                                        <span className='headerTxt'>PHONE NUMBER</span>
                                        <img src={FilterIcon} alt="icon"/>
                                   </div>
                              )
                         }},
                         {width:"200", headerName:'DATE JOINED', field:'createdAt', flex:1, cellClassName:"name-column--cell", renderHeader:()=>{
                              return (
                                   <div className='header' onClick={()=> setShowSortingForm(!showSortingForm)}>
                                        <span className='headerTxt'>DATE JOINED</span>
                                        <img src={FilterIcon} alt="icon"/>
                                   </div>
                              )
                         }},
                         {width:"170", headerName:'STATUS', field:'status', cellClassName:"name-column--cell",renderHeader:()=>{
                              return (
                                   <div className='header' onClick={()=> setShowSortingForm(!showSortingForm)}>
                                        <span className='headerTxt'>STATUS</span>
                                        <img src={FilterIcon} alt="icon"/>
                                   </div>
                              )
                         }, renderCell: ({row:{ status,id }})=>{
                              return (
                                        <>
                                             <div style={cellStyle}>
                                                  <p className="status" 
                                                       style={statusRender(status)}
                                                       onClick={()=> {
                                                            setCurrentRow(id);
                                                       }}
                                                  >
                                                       {status}
                                                  </p>
                                                  <img 
                                                       src={MenuIcon} 
                                                       alt="menu" 
                                                       onClick={()=> {
                                                            setCurrentRow(id);
                                                       }}
                                                       style={{cursor:"pointer"}}
                                                  />
                                             </div>
                                             <Menu id={id} users={users}/>
                                        </>
                                        

                                        )
                         }},
                    ]

     const usersDataSample = users.map(user => ({
          id:user.id,
          orgName: user.orgName, 
          userName:user.userName, 
          email:user.email, 
          phoneNumber:user.phoneNumber,
          createdAt:new Date(user.createdAt),
          status:statusRandomizer()
     }))

     const rows = usersDataSample;

  return (
    <div className='datagrid'>
     {showSortingForm && (<SortingForm users={users}/>)}
     <DataGrid rows={rows} columns={columns}/>
    </div>
  )
}

export default UsersDataGrid