import theme from '../../theme';
import { StyleSheet } from 'react-native';
export const signInStyles = StyleSheet.create({
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