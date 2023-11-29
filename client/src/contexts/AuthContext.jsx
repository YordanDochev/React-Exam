import { createContext } from "react";

import * as authService from "../services/authService"

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const registerSubmitHanler = async (values) => {
        const response = await authService.register(values)
        console.log(response);
    }

    const loginSubmitHandler = async (values) => {
        const response = await authService.login(values)
        console.log(response);
    }

    const values = {
        registerSubmitHanler,
        loginSubmitHandler
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext