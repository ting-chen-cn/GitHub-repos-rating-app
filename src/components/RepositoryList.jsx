import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';


const OrderSelect = ({ order, setOrder }) => {
  const styles = StyleSheet.create({
    container: {
      margin: 15,
      marginVertical: 5,
      marginRight: 25,
    },
    inputWeb: {
      borderWidth: 0,
      backgroundColor: theme.colors.main,
      fontSize: theme.fontSizes.body,
      paddingRight: 30,
    },
    inputAndroid: {
      borderWidth: 0,
      fontSize: theme.fontSizes.body,
      paddingRight: 30,
    },
    inputIOS: {
      borderWidth: 0,
      fontSize: theme.fontSizes.body,
      paddingRight: 30,
    },
  });

  return (
    <View style={styles.container}>
      <RNPickerSelect
        style={styles}
        onValueChange={(value) => setOrder(value)}
        items={[
          { label: 'Latest repositories', value: 'latestRelated' },
          { label: 'Highest rated repositories', value: 'highestRated' },
          { label: 'Lowest rated repositories', value: 'lowestRated' },
        ]}
        placeholder={{}}
        value={order}
      />
    </View>
  );
};




// export const RepositoryListContainer = ({ repositories, order, setOrder,searchKeyword,setSearchKeyword }) => {
//   const repositoryNodes = repositories
//     ? repositories.edges.map((edge) => edge.node)
//     : [];
//   const renderItem = ({ item }) => (
//   <RepositoryItem repository={item} />
//   );
//   const ItemSeparator = () => <View style={styles.separator} />;
//   const RenderHeader = () => {
//     const styles = StyleSheet.create({
//       searchContainer: {
//         margin: 15,
//         marginBottom: 0,
//       },
//     });
//     return (
//       <View>
//         <View style={styles.searchContainer}>
//           <Searchbar
//             placeholder='Search'
//             onChangeText={(query) => setSearchKeyword(query)}
//             value={searchKeyword}
//           />
//         </View>
//         <OrderSelect order={order} setOrder={setOrder} />
//       </View>
//     );
//   };
// const styles = StyleSheet.create({
//   separator: {
//     height: 20,
//   },
//   headerContainer: {
//     padding: 0,
//     margin:0,
//     height: 60,
//     fontSize: 24,
//     backgroundColor: theme.colors.textSecondary,
//   }
// });
//   return (
//     <FlatList
//       data={repositoryNodes}
//       ItemSeparatorComponent={ItemSeparator}
//       renderItem={renderItem}
//       keyExtractor={({ id }) => id}
//       ListHeaderComponent={() => <RenderHeader />}
//       onEndReachedThreshold={0.5}
//     />
//   );
// };

export class RepositoryListContainer extends React.Component {
  ListHeader = () => {
    const order = this.props.order;
    const setOrder = this.props.setOrder;
    const searchKeyword = this.props.searchKeyword;
    const setSearchKeyword = this.props.setSearchKeyword;
    const styles = StyleSheet.create({
      searchContainer: {
        margin: 15,
        marginBottom: 0,
      },
    });
    return (
      <View>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder='Search'
            onChangeText={(query) => setSearchKeyword(query)}
            value={searchKeyword}
          />
        </View>
        <OrderSelect order={order} setOrder={setOrder} />
      </View>
    );
  };

  render() {
    const repositories = this.props.repositories;
    const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
      : [];
    const styles = StyleSheet.create({
      separator: {
        height: 20,
      }
    });
    const renderItem = ({ item }) => (
      <RepositoryItem repository={item} />
    );
    const ItemSeparator = () => <View style={styles.separator} />;
    return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={this.ListHeader}
      // onEndReachedThreshold={0.5}
    />
  );
  }
}

const RepositoryList = () => {
  const [order, setOrder] = useState('latestRelated');
  const [search, setSearch] = useState('');
  const [searchKeyword] = useDebounce(search, 5000);
  const orderBy= order === 'latestRelated' ? 'CREATED_AT' : 'RATING_AVERAGE';
  const orderDirection = order === 'highestRated' ? 'DESC' : 'ASC';
  const { repositories } = useRepositories({orderDirection,orderBy,searchKeyword});
  return <RepositoryListContainer
    repositories={repositories}
    searchKeyword={search}
    setSearchKeyword={setSearch}
    order={order}
    setOrder={setOrder} />;
};

export default RepositoryList;