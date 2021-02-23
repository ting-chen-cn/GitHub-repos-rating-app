import theme from '../../theme';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
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
});