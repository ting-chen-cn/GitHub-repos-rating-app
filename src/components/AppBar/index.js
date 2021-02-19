import React from 'react';
import { Link } from 'react-router-native';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { AppBarTab } from './AppBarTab';
import { SignOutBar } from './SignOutBar';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../../graphql/queries';

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);

  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>Repositories</Link>
        {!data?.authorizedUser && (
          <Link to="/signIn" component={AppBarTab}>Sign in</Link>
        )}
        {data?.authorizedUser &&
          <SignOutBar />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;