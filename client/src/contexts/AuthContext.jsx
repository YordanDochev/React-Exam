import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


import * as authService from "../services/authService"
import usePersistedStorage from "../hooks/usePersistedStorage";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = usePersistedStorage('Auth', {})
    const navigate = useNavigate();

    const [status, setStatus] = useState("");

    const statusToggler = () => {
        if (status !== "") {
            setStatus("");
        }
    };

    const registerSubmitHanler = async (values) => {
        try {
            const response = await authService.register(values)

            setAuth(response)
            navigate('/')
        } catch (error) {
            console.log(error);
        }

    }

    const loginSubmitHandler = async (values) => {
        try {
            const response = await authService.login(values)

            setAuth(response)
            navigate('/')
        } catch (error) {
            setStatus(error.message);

            console.log(error.message)
        }
    }

    const logoutSubmitHandler = async () => {
        try {
            await authService.logout()
            setAuth({})
            navigate('/')
        } catch (error) {
            setAuth({})
            navigate('/')
            console.log(error);
        }
    }

    const values = {
        registerSubmitHanler,
        loginSubmitHandler,
        logoutSubmitHandler,
        firstName: auth.firstName,
        lastName: auth.lastName,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        status,
        statusToggler,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext