import React from 'react';
import { useHistory } from "react-router-native";
import { SignInContainer } from './SignInForm';
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
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;