import React from 'react';
import theme from '../theme';
import { TextInput as NativeTextInput,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorInput: {
      borderColor: theme.colors.error,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderRadius: theme.roundness,
    borderColor: '#aab2bb',
  },
});
const TextInput = ({style, error, ...props }) => {
  const textInputStyle = [style, error && styles.errorInput];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;