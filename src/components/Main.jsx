import React from 'react';
import RepositoryList from './RepositoryList';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar/index';
import theme from '../theme';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import CreateReview from './CreateReview/index';
import SingleRepository from './SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/review' exact >
          <CreateReview />
        </Route>
        <Route path='/signIn' exact>
          <SignIn />
        </Route>
        <Route path='/signUp' exact>
          <SignUp />
        </Route>
        <Route path='/:id' exact >
          <SingleRepository />
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