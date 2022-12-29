import './usersdatagrid.css'

import { DataGrid } from '@mui/x-data-grid';
import { statusRandomizer, statusRender } from '../../utils/helperFuncs';
import MenuIcon from '../../assets/icons/dots.svg'
import Menu from '../Menu/Menu';
import { useContext, useState } from 'react';
import { states } from '../../utils/context';

const UsersDataGrid = ({users}) => {

     const{currentRow, setCurrentRow} = useContext(states);

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
                         {width:"240", headerName:'ORGANIZATION', field:'orgName', flex:1, cellClassName:"name-column--cell"},
                         {width:"220", headerName:'USERNAME', field:'userName', flex:1, cellClassName:"name-column--cell"},
                         {width:"220", headerName:'EMAIL', field:'email', flex:1, cellClassName:"name-column--cell"},
                         {width:"230", headerName:'PHONE NUMBER', field:'phoneNumber', flex:1, cellClassName:"name-column--cell"},
                         {width:"200", headerName:'DATE JOINED', field:'createdAt', flex:1, cellClassName:"name-column--cell"},
                         {width:"170", headerName:'STATUS', field:'status', cellClassName:"name-column--cell", renderCell: ({row:{ status,id }})=>{
                              return (
                                        <>
                                             <div style={cellStyle}>
                                                  <p className="status" 
                                                       style={statusRender(status)}>
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
     <DataGrid rows={rows} columns={columns}/>
    </div>
  )
}

export default UsersDataGrid