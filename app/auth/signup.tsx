import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import { SignUpSchema } from '../formShemas';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
  const { signup, loading, error } = useAuth();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: SignUpSchema,
    onSubmit: (values) => signup(values.email, values.password),
  });

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && <Text>{formik.errors.email}</Text>}
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && <Text>{formik.errors.password}</Text>}
      {error && <Text>{error}</Text>}
      <Button onPress={formik.handleSubmit as (event: any) => void} title="Sign Up" disabled={loading} />
    </View>
  );
};

export default SignUp;
