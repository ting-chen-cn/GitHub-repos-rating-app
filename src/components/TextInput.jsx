import React from 'react';
import theme from '../theme';
import { TextInput as NativeTextInput,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorInput: {
      borderColor: theme.colors.error,
  },
});
const TextInput = ({style, error, ...props }) => {
  const textInputStyle = [style, error && styles.errorInput];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;