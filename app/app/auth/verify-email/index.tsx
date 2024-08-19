import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//import { VerifyEmailSchema } from '../../formShemas';
import useAuth from '../../../hooks/useAuth'

const VerifyEmailSchema = Yup.object().shape({
  token: Yup.string().required('Verification token is required'),
});

const VerifyEmail = () => {
  const { verifyEmail, loading, error } = useAuth();
  const formik = useFormik({
    initialValues: { token: '' },
    validationSchema: VerifyEmailSchema,
    onSubmit: (values) => {
      verifyEmail(values.token);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Verification Token"
        onChangeText={formik.handleChange('token')}
        onBlur={formik.handleBlur('token')}
        value={formik.values.token}
        style={styles.input}
      />
      {formik.touched.token && formik.errors.token && (
        <Text style={styles.errorText}>{formik.errors.token}</Text>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* touchable opacity */}
      <TouchableOpacity onPress={() => formik.handleSubmit()} disabled={loading}>
        <Text>
          Verify Email
          </Text>
      </TouchableOpacity>
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

export default VerifyEmail;
