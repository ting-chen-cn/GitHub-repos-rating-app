import ApolloClient from 'apollo-boost';
import Constant from 'expo-constants';

const createApolloClient = () => {
  return new ApolloClient({
    uri:Constant.manifest.extra.APOLLO_URI,
  });
};
export default createApolloClient;