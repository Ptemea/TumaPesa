//sharedConfig.ts
export const API_ENDPOINTS = {
  LOGIN: 'https://example.com/api/login',
  SIGNUP: 'https://example.com/api/signup',
  FORGOT_PASSWORD: 'https://example.com/api/forgot-password',
  VERIFY_EMAIL: 'https://example.com/api/verify-email',

  /*UPDATE_EMAIL: 'https://example.com/api/update-email',
  UPDATE_PASSWORD: 'https://example.com/api/update-password',
  UPDATE_USERNAME: 'https://example.com/api/update-username',
  EDIT_ACCOUNT: 'https://example.com/api/edit-account',

  USER_DETAILS: 'https://example.com/api/user-details',*/

  
    UPDATE_EMAIL: '/update-email',
    UPDATE_PASSWORD: '/update-password',
    UPDATE_USERNAME: '/update-username',
    EDIT_ACCOUNT: '/edit-account',
  };
  





export const PASSWORD_MIN_LENGTH = 8;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
