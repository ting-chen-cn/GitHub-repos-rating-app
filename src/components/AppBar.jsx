import React from 'react';
import { View, StyleSheet, Text,ScrollView } from 'react-native';
import { Link } from "react-router-native";
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
  },
  tabItem: {
    flexGrow: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

const AppBarTab = ({ link, text }) => {
  return (
    <Link to={link} >
      <View style={styles.tabItem}>
        <Text style= {styles.text} fontWeight='bold'>
          {text}
        </Text>
      </View>
    </Link>
  );
};

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab link='/' text='Repositories' />
      <AppBarTab link='/signIn' text='SignIn' />
    </ScrollView>
  </View>;
};

export default AppBar;