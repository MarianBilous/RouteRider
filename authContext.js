import React, { createContext, useState, useContext } from 'react';
import {signIn, signOut} from "./api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (username, password) => {
        try {
            const response = await signIn(username, password);

            // Зберігаємо токен у сеансі
            // Це передбачає, що ваш сервер вже встановлює cookie або використовує інший механізм для зберігання сесій
            // Якщо ви користуєтеся іншим методом зберігання токенів, то змініть цю логіку відповідно
            req.session.token = response.data.token;

            setIsLoggedIn(true);
        } catch (error) {
            console.error('Помилка під час входу:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            // Викликаємо API для виходу
            await signOut();
            // Очищаємо локальний стан і сесію
            setIsLoggedIn(false);
            req.session = null; // Переконайтеся, що сеанс дійсно очищено
        } catch (error) {
            console.error('Помилка під час виходу:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
