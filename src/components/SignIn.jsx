import React from 'react';
import Text from './Text';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import { Formik} from 'formik';
import { View,TouchableWithoutFeedback,StyleSheet } from 'react-native';

const signInStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textWhite,
    padding: 15,
  },
  inputContainer: {
      marginBottom: 10,
    },
  input: {
      borderColor: theme.colors.mainBackground,
      borderWidth: 1,
      borderRadius: 3,
      height: 50,
      paddingVertical: 15,
      paddingHorizontal: 10,
  },
  buttonContainer: {
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      flexGrow: 1,
      padding: 17,
      borderRadius: 3,
      height: 50,
    },
});

const onSubmit = (values) => {
  console.log(values);
};
const initialValues = {
  username: '',
  password: '',
};
const SignInForm = ({ onSubmit }) => {
  return (
    <View style={signInStyles.container}>
      <View style={signInStyles.inputContainer}>
        <FormikTextInput style={signInStyles.input} name="username" placeholder="Username" />
      </View>
      <View style={signInStyles.inputContainer}>
        <FormikTextInput style={signInStyles.input} name="password" placeholder="Password" secureTextEntry={ true } />
      </View>
      <View style={signInStyles.buttonContainer}>
        <TouchableWithoutFeedback onPress={onSubmit}>
        <Text >Sign in</Text>
      </TouchableWithoutFeedback>
      </View>
      
      
    </View>
  );
};

const SignIn = () => {
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
      
    </View>

  );
};

export default SignIn;