import React from 'react';
import Text from '.././Text';
import { styles } from './styles';
import { View,  TouchableWithoutFeedback } from 'react-native';
export const AppBarTab = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};