import { useContext } from "react";
import { states } from "./utils/context";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Loader from "./components/Loader/Loader";
import UserDetails from "./pages/UserDetails/UserDetails"

function App() {

  const {loading} = useContext(states);

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
