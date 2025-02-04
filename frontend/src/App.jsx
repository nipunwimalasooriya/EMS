import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import Employee from "./components/Employee.jsx";
import Category from "./components/Category.jsx";
import Profile from "./components/Profile.jsx";
import AddCategory from "./components/AddCategory.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/adminlogin' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='' element = {<Home/>}></Route>
            <Route path='/dashboard/employee' element = {<Employee/>}></Route>
            <Route path='/dashboard/category' element = {<Category/>}></Route>
            <Route path='/dashboard/profile' element = {<Profile/>}></Route>
            <Route path='/dashboard/add_category' element = {<AddCategory/>}></Route>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
