import React from 'react';
import { useHistory } from "react-router-native";
import { useMutation } from '@apollo/react-hooks';
import { FormContainer } from './FormContainer';
import {CREATE_USER} from '../../graphql/mutations';


const SignIn = () => {
  console.log(CREATE_USER);
  const history = useHistory();
  const [mutate] = useMutation(CREATE_USER);

  const onSubmit =async (values) => {
    const { username, password } = values;
    console.log(username);
    try {
      const res = await mutate({
        variables: { username, password }
      }  );
      console.log(res);
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
};
  return <FormContainer onSubmit={onSubmit} />;
};

export default SignIn;