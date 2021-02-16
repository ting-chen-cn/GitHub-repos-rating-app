import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import Text from './Text';

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
});

const cardBodyStyles = StyleSheet.create({
  container: {
    marginTop: 5,
    margin:55,
    paddingTop: 5,
    padding: 5,
    alignSelf: 'flex-start',
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  }
});

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  actionTouchable: {
    flexGrow: 0,
  },
});

const CardHeader = ({item}) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image style={cardHeaderStyles.avatar} source={{uri: item.ownerAvatarUrl}} />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">{ item.fullName}</Text>
        <Text color="textSecondary">{ item.description}</Text>
      </View>
    </View>
  );
};


const CardBody = ({item}) => {
  return (
    <View style={cardBodyStyles.container}>
      <Text color="textWhite" >
        {item.language}
      </Text>
    </View>
  );
};


const CardFooterAction = ({ text, value }) => {
  const parseNumber = (value) => {
    if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
    return value;
  };
  return (
    <View>
      <Text color="textSecondary" >{parseNumber(value)}</Text>
      <Text color="textSecondary" style={cardFooterStyles.actionText}>{text}</Text> 
    </View>
  );
};

const CardFooter = ({item}) => {
  return (
      <View style={cardFooterStyles.container}>
      <CardFooterAction text='Stars' value={item.stargazersCount} >
      </CardFooterAction>
      <CardFooterAction text='Forks' value={item.forksCount}>
      </CardFooterAction>
      <CardFooterAction text='Reviews' value={item.reviewCount}>
      </CardFooterAction>
      <CardFooterAction text='Rating' value={item.ratingAverage}>
      </CardFooterAction>
      </View>

    
  );
};

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
});

const Card = ({item}) => {
  return (
    <View style={cardStyles.container}>
      <CardHeader item={ item}/>
      <CardBody item={ item}/>
      <CardFooter item={ item} />
    </View>
  );
};

export default Card;