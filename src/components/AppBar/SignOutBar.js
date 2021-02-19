import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import Text from '.././Text';
import { styles } from './styles';
import  useSignOut  from '../../hooks/useSignOut';



export const SignOutBar = () => {
  const [signOut] = useSignOut();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOut();
    history.push('/signIn');
};
  return (
    <TouchableOpacity onPress={handleSignOut} style={styles.tabTouchable}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          sign out
        </Text>
      </View>
    </TouchableOpacity>
  );
};