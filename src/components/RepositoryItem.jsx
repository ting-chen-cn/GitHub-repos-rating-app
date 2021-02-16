import React from 'react';
import {  View,  Text } from 'react-native';

const Item = ({ item }) => (
  <View >
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