import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as WebBrowser from 'expo-web-browser';
import { FlatList, View, StyleSheet } from 'react-native';
import {useParams} from 'react-router-native';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import Button from './Button';

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  container: {
    backgroundColor: theme.colors.textWhite,
  },
  cardContainer: {
    padding: 15,
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 15,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;


const Repository = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_REPOSITORY, { variables: { id } });
  const repository = data ? [data.repository] : [];
  const url = `https://github.com/${repository[0]?.fullName}`;
  console.log(data);
  const onSubmit = () => {
    WebBrowser.openBrowserAsync(url);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <FlatList
          data={repository}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (<RepositoryItem repository={item}  />)}
          keyExtractor={({ id }) => id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit}>Open in Github</Button>
      </View>   
    </View>
    
  );
};
export default Repository;