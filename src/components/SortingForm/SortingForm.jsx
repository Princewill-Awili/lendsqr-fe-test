import { useContext, useState } from 'react';
import { states } from '../../utils/context';
import './sortingform.css'
import InputHolder from '../InputHolder/InputHolder'


const SortingForm = ({users}) => {

  const {setAllUsers} = useContext(states);

  const [orgName, setOrgName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');


  const handleFilter = () => {
    //Sieves through "users" and then sets "allUsers" to filtered Data
  }
  
  return (
    <div className='sortingform'>
     <InputHolder label="Organization" inputType ="select"/>
     <InputHolder label="Username" inputType="text"/>
     <InputHolder label="Email" inputType="email"/>
     <InputHolder label="Date" inputType="date"/>
     <InputHolder label="Phone Number" inputType="text"/>
     <InputHolder label="Status" inputType="select"/>

     <div className="sortBtns">
          <div className="sortBtn resetBtn">Reset</div>
          <div className="sortBtn filterBtn">Filter</div>
     </div>
    </div>
  )
}

export default SortingForm