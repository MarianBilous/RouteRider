import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.104:4000/api',
    // baseURL: 'http://172.20.10.2:4000/api',
});

export const getParcels = async () => {
    try {
        const response = await api.get('/parcels/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching parcels:', error);
        throw error;
    }
};

export const signIn = async (username, password) => {
    try {
        const response = await api.post('/auth/signin', {
            username,
            password
        });

        return response.data;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};

export const signOut = async () => {
    try {
        const response = await api.post('/auth/signout');
        return response.data;
    } catch (error) {
        console.error('Error signing out:', error);
        throw error;
    }
};

export const getDeliveryHistory = {};
