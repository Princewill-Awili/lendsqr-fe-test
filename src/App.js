import { useContext } from "react";
import { states } from "./utils/context";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Loader from "./components/Loader/Loader";
import UserDetails from "./pages/UserDetails/UserDetails"
import { useEffect } from "react";

function App() {

  const {loading, isLoggedIn, setIsLoggedIn} = useContext(states);

  useEffect(()=>{
    const currentLogStatus = JSON.parse(localStorage.getItem('isLoggedIn'));
    setIsLoggedIn(currentLogStatus); 
  },[]);

  return (
    <div className="App">
      {loading && (<Loader/>)}
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/users/:id" element={<UserDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
