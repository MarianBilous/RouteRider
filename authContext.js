import React, {createContext, useState, useContext, useEffect} from 'react';
import {signIn, signOut, verifyToken} from "./api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const loggedIn = await verifyToken();
                setIsLoggedIn(loggedIn);
            } catch (error) {
                console.error('Помилка перевірки стану авторизації:', error);
            }
        };

        checkLoggedIn();
    }, []);

    const login = (username, password) => {
        try {
            signIn(username, password).then(response => {
                if (response.id) {
                    setIsLoggedIn(true);
                } else {
                    console.error('Немає відповідних даних для авторизації');
                }
            });
        } catch (error) {
            console.error('Помилка під час входу:', error);
            throw error;
        }
    };

    const logout = () => {
        try {
            signOut().then(r => {
                setIsLoggedIn(false);
            });
        } catch (error) {
            console.error('Помилка під час виходу:', error);
            throw error;
        }
    };

    const checkIsLoggedIn = () => {
        return isLoggedIn;
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, checkIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
