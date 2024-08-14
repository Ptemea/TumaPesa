import { useState, useEffect } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
//import { reportError } from '../services/crashReporting';


const API_ENDPOINTS = {
  LOGIN: 'https://example.com/api/login',
  SIGNUP: 'https://example.com/api/signup',
  FORGOT_PASSWORD: 'https://example.com/api/forgot-password',
  VERIFY_EMAIL: 'https://example.com/api/verify-email',
};

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
      await SecureStore.setItemAsync('user', JSON.stringify(response.data));
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
      reportError(err);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_ENDPOINTS.SIGNUP, { email, password });
      setUser(response.data);
      await SecureStore.setItemAsync('user', JSON.stringify(response.data));
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
      reportError(err);
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(API_ENDPOINTS.FORGOT_PASSWORD, { email });
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
      reportError(err);
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (token: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(API_ENDPOINTS.VERIFY_EMAIL, { token });
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
      reportError(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    await SecureStore.deleteItemAsync('user');
  };

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await SecureStore.getItemAsync('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadUser();
  }, []);

  return { user, loading, error, login, signup, forgotPassword, verifyEmail, logout };
};

export default useAuth;
