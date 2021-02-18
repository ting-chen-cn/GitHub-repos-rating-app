import React from 'react';
import { Formik} from 'formik';
import { View} from 'react-native';
import { validationSchema, initialValues } from './FormHelper';
import { SignInForm } from './SignInForm';
import useSignIn from '../../hooks/useSignIn';
import AuthStorage from '../../utils/authStorage';

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit =async (values) => {
    const { username, password } = values;
    const AUTH = new AuthStorage('username');

    try {
      const { data } = await signIn({ username, password });
      await AUTH.setAccessToken(data.authorize.accessToken);
      // const token = await AUTH.getAccessToken();
      // console.log(token);
    } catch (e) {
      console.log(e);
    }
};
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
      
    </View>

  );
};

export default SignIn;