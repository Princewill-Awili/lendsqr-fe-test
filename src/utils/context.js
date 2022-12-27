import { createContext, useState } from "react"

export const states = createContext();

export const StateContextProvider = ({children}) => {

     const [userEmail, setUserEmail] = useState('');
     const [userPassword, setUserPassword] = useState('');

     return (
          <states.Provider value={{userEmail, setUserEmail, userPassword, setUserPassword}}>
               {children}
          </states.Provider>
     )
}