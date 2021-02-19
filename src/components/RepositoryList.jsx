import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from './ItemCard';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
  <Card item={item} />
  );
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer repositories={repositories} />;
  // const repositoryNodes = repositories
  //   ? repositories.edges.map(edge => edge.node)
  //   : [];

  // const renderItem = ({ item }) => (
  // <Card item={item} />
  // );
  // return (
  //   <FlatList
  //     data={repositoryNodes}
  //     ItemSeparatorComponent={ItemSeparator}
  //     renderItem={renderItem}
  //     keyExtractor={({ id }) => id}
  //   />
  // );
};

export default RepositoryList;