// services/crashReporting.ts
//import * as Sentry from '@sentry/react-native';

//Sentry.init({
  //dsn: 'YOUR_SENTRY_DSN', // Replace with your actual Sentry DSN
  // other options...
//});

//export const reportError = (error: any) => {
  //Sentry.captureException(error);
//};
//

// services/api.ts
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000', // Update this URL to your backend URL
});

export const signup = (email: string, name: string, password: string) => {
  return api.post('/auth/signup', { email, name, password });
};

export const login = (email: string, password: string) => {
  return api.post('/auth/login', { email, password });
};

export const createTransaction = (userId: number, amount: number, type: string) => {
  return api.post('/transactions', { userId, amount, type });
};

export const getTransactions = (userId: number) => {
  return api.get(`/transactions/${userId}`);
};

export const updateSettings = (userId: number, theme: string, notifications: boolean) => {
  return api.put(`/settings/${userId}`, { theme, notifications });
};

export const getSettings = (userId: number) => {
  return api.get(`/settings/${userId}`);
};


