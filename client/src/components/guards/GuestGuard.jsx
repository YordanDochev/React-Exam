import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext";

export default function GuestGuard() {
    const { isAuthenticated } = useContext(AuthContext)

    if (isAuthenticated) {
        return <Navigate to={'/'}></Navigate>
    }
    return <Outlet />
}
