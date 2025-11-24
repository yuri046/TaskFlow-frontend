import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import PrivateRoute from "./PrivateRoutes"
import User from "../pages/User/User"


const AppRoutes = ()=>{
  return(
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/> 
    <Route path="/users/me" element={<User/>}/>
    <Route path="/dashboard"/>
    <Route path="/dashboard/:id"/>
  </Routes>
  )
}

export default AppRoutes;
