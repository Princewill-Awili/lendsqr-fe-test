import { createContext, useState } from "react"

export const states = createContext();

export const StateContextProvider = ({children}) => {
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [userEmail, setUserEmail] = useState('');
     const [userPassword, setUserPassword] = useState('');
     const [loading, setLoading] = useState(false);
     const [activeSection, setActiveSection] =  useState('Users');

     const [currentRow, setCurrentRow] = useState(null);
     const [pickedUser, setPickedUser] = useState({});
     const [allUsers, setAllUsers] = useState([]);

     return (
          <states.Provider value={{isLoggedIn, setIsLoggedIn,allUsers,setAllUsers, userEmail, setUserEmail, userPassword, setUserPassword,loading, setLoading, activeSection, setActiveSection, currentRow, setCurrentRow, pickedUser, setPickedUser}}>
               {children}
          </states.Provider>
     )
}