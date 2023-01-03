import { useContext} from "react";
import { states } from "./utils/context";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Loader from "./components/Loader/Loader";
import UserDetails from "./pages/UserDetails/UserDetails"


function App() {

  const { loading,isLoggedIn } = useContext(states);

  

  return (
    <div className="App">
      {loading && (<Loader/>)}
      <Routes>
        <Route path="/" exact element={isLoggedIn ? (<Navigate replace to={'/dashboard'}/>):(<Login/>)}/>
        <Route path="/dashboard" element={isLoggedIn ? (<Dashboard/>) : (<Navigate to={'/'}/>)}/>
        <Route path="/dashboard/users/:id" element={isLoggedIn? (<UserDetails/>) : (<Navigate to={'/'}/>)}/>
      </Routes>
    </div>
  );
}

export default App;
