import { Navigate } from "react-router-dom";

const PrivateRoute = ({children})=>{
    const isAuthenticated = localStorage.getItem("token");

    {isAuthenticated ? children : <Navigate to="/login"/>}
}

export default PrivateRoute