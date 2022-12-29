import { createContext, useState } from "react"

export const states = createContext();

export const StateContextProvider = ({children}) => {

     const [userEmail, setUserEmail] = useState('');
     const [userPassword, setUserPassword] = useState('');
     const [loading, setLoading] = useState(false);
     const [activeSection, setActiveSection] =  useState('Users');

     const [currentRow, setCurrentRow] = useState(null);
     const [pickedUser, setPickedUser] = useState({});

     return (
          <states.Provider value={{userEmail, setUserEmail, userPassword, setUserPassword,loading, setLoading, activeSection, setActiveSection, currentRow, setCurrentRow, pickedUser, setPickedUser}}>
               {children}
          </states.Provider>
     )
}