import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
