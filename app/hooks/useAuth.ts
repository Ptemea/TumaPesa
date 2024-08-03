import { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/ApiConstants';
  
const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(API_ENDPOINTS.LOGIN, { email, password });
            setUser(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return { user, loading, error, login, logout };
};

export default useAuth;