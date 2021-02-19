import React, { useContext } from 'react';
import { Link } from 'react-router-native';
import { View, ScrollView } from 'react-native';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import AuthStorageContext from '../../contexts/AuthStorageContext';
import { styles } from './styles';
import { AppBarTab } from './AppBarTab';
import { AUTHORIZED_USER } from '../../graphql/queries';

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const history = useHistory();

  const { data } = useQuery(AUTHORIZED_USER);
  const authorizedUser = data ? data.authorizedUser : undefined;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/signIn');
  };
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>
          Repositories
        </Link>
        {authorizedUser ? (
          <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
        ) : (
          <Link to="/signIn" component={AppBarTab}>
            Sign in
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;