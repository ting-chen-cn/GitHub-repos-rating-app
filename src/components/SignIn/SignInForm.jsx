import React from 'react';
import Text from '.././Text';
import { Formik} from 'formik';
import { View, TouchableWithoutFeedback } from 'react-native';
import { signInStyles } from './SignInStyles';
import FormikTextInput from './FormikTextInput';
import { validationSchema, initialValues } from './FormHelper';


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={signInStyles.container}>
      <View style={signInStyles.inputContainer}>
        <FormikTextInput style={signInStyles.input} testID='username' name="username" placeholder="Username" />
      </View>
      <View style={signInStyles.inputContainer}>
        <FormikTextInput style={signInStyles.input} testID='password'  name="password" placeholder="Password"  secureTextEntry={ true } />
      </View>
      <View style={signInStyles.buttonContainer}>
        <TouchableWithoutFeedback onPress={onSubmit} testID="signInSubmitButton">
        <Text >Sign in</Text>
      </TouchableWithoutFeedback>
      </View>
      
    </View>
  );
};

export const SignInContainer = ({onSubmit}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};