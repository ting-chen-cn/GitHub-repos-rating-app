import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as WebBrowser from 'expo-web-browser';
import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { format } from 'date-fns';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import Button from './Button';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  container: {
    backgroundColor: theme.colors.textWhite,
  },
  topContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  cardContainer: {
    padding: 15,
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 15,
  },
  avatarText: {
    color:theme.colors.primary,
    fontSize: 24,
    alignSelf:'center',
  },
  avatarContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    marginRight: 20,
    width: 60,
    height:60,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor:theme.colors.primary,
    borderRadius: 30,
  },
});
const RepositoryInfo = ({ repository }) => {
  
  const url = repository ? `https://github.com/${repository.fullName}`: undefined;
  const onSubmit = () => {
    WebBrowser.openBrowserAsync(url);
  };
  return (
    <View>
      <View style={styles.container}>
      <View style={styles.cardContainer}>
        {repository ? <RepositoryItem repository={repository} />: null}
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit}>Open in Github</Button>
      </View> 
    </View> 
    <View style={styles.separator} />
    </View>
    
  );
};

const ReviewItem = ({ review }) => {

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.contentContainer}>
            <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
            >
              {review.user.username}
            </Text>
          <Text style={styles.descriptionText} color="textSecondary">
            {format(new Date(review.createdAt),'MM/dd/yyyy')}
          </Text>
            <Text >{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const  {data}  = useQuery(GET_REPOSITORY, { variables: { id } ,fetchPolicy: 'cache-and-network'});
  const repository = data ? data.repository : undefined;
  
  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default SingleRepository;