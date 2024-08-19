import { useState } from 'react';
import axios from 'axios';
//import { API_ENDPOINTS } from '../auth/sharedConfig';
//import { API_ENDPOINTS } from '@constants/ApiConstants';
import { API_ENDPOINTS } from '../app/auth/sharedConfig';

interface AccountData {
  name?: string;
  phone?: string;
  // Add other account-related fields here
}

const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
      setError(err.response?.data?.message || err.message);
    } else if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('An unexpected error occurred');
    }
  };

  const updateEmail = async (userId: string, email: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${API_ENDPOINTS.UPDATE_EMAIL}`, { userId, email });
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (userId: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${API_ENDPOINTS.UPDATE_PASSWORD}`, { userId, password });
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateUsername = async (userId: string, username: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${API_ENDPOINTS.UPDATE_USERNAME}`, { userId, username });
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const editAccount = async (userId: string, accountData: AccountData) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${API_ENDPOINTS.EDIT_ACCOUNT}`, { userId, ...accountData });
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  return { updateEmail, updatePassword, updateUsername, editAccount, loading, error };
};

export default useProfile;
