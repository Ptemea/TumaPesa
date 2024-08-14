
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { SignInSchema } from '../formShemas';
import useAuth from '../hooks/useAuth';

const SignIn = () => {
  const { login, loading, error } = useAuth();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
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
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        value={formik.values.password}
        style={styles.input}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button onPress={handlePress} title="Sign In" disabled={loading} />
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

export default SignIn;
