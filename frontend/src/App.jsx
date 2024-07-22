import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/adminlogin' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
