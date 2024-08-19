// types.ts or navigation.ts

import { RouteProp } from '@react-navigation/native';

// Define the stack param list for your navigation
export type YourStackParamList = {
  ChangeEmail: { userId: string };
  ChangePassword: { userId: string };
  ChangeUsername: { userId: string };
  EditAccount: { userId: string };
  // Add other routes here as needed
};

// Example usage of RouteProp with YourStackParamList
export type ChangeEmailRouteProp = RouteProp<YourStackParamList, 'ChangeEmail'>;
export type ChangePasswordRouteProp = RouteProp<YourStackParamList, 'ChangePassword'>;
export type ChangeUsernameRouteProp = RouteProp<YourStackParamList, 'ChangeUsername'>;
export type EditAccountRouteProp = RouteProp<YourStackParamList, 'EditAccount'>;
