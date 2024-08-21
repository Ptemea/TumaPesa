
import { useState } from 'react';
//import userId from '../app/(user)/[userId]';

export default function useProfile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editAccount = async (userId: string, accountData: any) => {
    setLoading(true);
    setError(null);

    try {
      // Mock API request - replace with actual API call
      console.log(`Editing account for userId: ${userId}`, accountData);
      // Perform API request and handle the response
    } catch (e) {
      setError('Failed to edit account');
    } finally {
      setLoading(false);
    }
  };

  const updateEmail = async (userId: string, email: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log(`Updating email for userId: ${userId}`, email);
    } catch (e) {
      setError('Failed to update email');
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (userId: string, password: string ) => {
    setLoading(true);
    setError(null);

    try {
      console.log('updating password for userId: $userId', password);
    }catch (e) {
      setError('Failed to update password');
    }finally {
      setLoading(false);
    }
  };

  const updateUsername = async (userId: string, username: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log(`Updating username for userId: ${userId}`, username);
    } catch (e) {
      setError('Failed to update username');
    } finally {
      setLoading(false);
    }
  };
  const upDatemail = async (userId: string, username: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log(`Updating username for userId: ${userId}`, username);
    } catch (e) {
      setError('Failed to update username');
    } finally {
      setLoading(false);
    }
  };

  return { editAccount, updateEmail, updatePassword, updateUsername,upDatemail, loading, error };
}
