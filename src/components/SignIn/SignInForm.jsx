import React from 'react';
import Text from '.././Text';
import { signInStyles } from './SignInStyles';
import FormikTextInput from '.././FormikTextInput';
import { View, TouchableWithoutFeedback } from 'react-native';

export const SignInForm = ({ onSubmit }) => {
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