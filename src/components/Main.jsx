import React from 'react';
import RepositoryList from './RepositoryList';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#e1e4e8',
  },
});


const Main = () => {
  return (
    
    <View style={styles.container}>
      <AppBar/>
      <RepositoryList />
    </View>
  );
};

export default Main;