import React from 'react';
import {  View,  StyleSheet, Text, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});

const Item = ({ item }) => (
  <View style={styles.container}>
    <Text >FullName: {item.fullName}</Text>
    <Text >Description:{item.description}</Text>
    <Text >Language: {item.language}</Text>
    <Text >Forks: {item.forksCount}</Text>
    <Text >Stars: {item.stargazersCount}</Text>
    <Text >Rating: {item.ratingAverage}</Text>
    <Text >Reviews: {item.reviewCount}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item item={item} />
  );
export default renderItem;