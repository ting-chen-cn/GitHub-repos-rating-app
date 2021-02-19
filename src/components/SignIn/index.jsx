import React from 'react';
import { Formik} from 'formik';
import { View } from 'react-native';
import { useHistory } from "react-router-native";
import { validationSchema, initialValues } from './FormHelper';
import { SignInForm } from './SignInForm';
import useSignIn from '../../hooks/useSignIn';


const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit =async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      history.push("/");
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