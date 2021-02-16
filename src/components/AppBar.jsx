import React from 'react';
import { View, StyleSheet,Text,TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.heading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <TouchableWithoutFeedback>
      <Text  style= {styles.text}>
        Repositories
      </Text>
    </TouchableWithoutFeedback>
  </View>;
};

export default AppBar;