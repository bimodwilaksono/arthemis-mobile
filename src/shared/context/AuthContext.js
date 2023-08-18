import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from '../utils/storageUtil';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle successful login
    const login = (newToken) => {
        setToken(newToken);
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const logout = () => {
        setToken("");
        setIsLoggedIn(false);
    };

    // Value object to be provided by the context
    const authContextValue = {
        token,
        isLoggedIn,
        login,
        logout,
    };

    useEffect(() => {
        async function fetchToken() {
            const token = await getLocalStorage("token");
            if(token) {
              setToken(token);
              setIsLoggedIn(true)
            }
        }
        fetchToken();
    }, []);

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
