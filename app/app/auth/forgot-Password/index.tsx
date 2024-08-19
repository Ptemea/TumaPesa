//auth/ForgotPassword.tsx
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAuth from '../../../hooks/useAuth';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const { forgotPassword, loading, error } = useAuth();
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      forgotPassword(values.email);
    },
  });

  const handlePress = () => {
    formik.handleSubmit();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        value={formik.values.email}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {formik.touched.email && formik.errors.email && (
        <Text style={styles.errorText}>{formik.errors.email}</Text>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button onPress={handlePress} title="Reset Password" disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default ForgotPassword;
