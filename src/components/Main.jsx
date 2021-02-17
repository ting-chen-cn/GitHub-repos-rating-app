import React from 'react';
import RepositoryList from './RepositoryList';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // flexGrow: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/signIn' exact>
          <SignIn />
        </Route>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;