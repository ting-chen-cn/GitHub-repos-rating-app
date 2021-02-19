import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { AUTHORIZE } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useContext(AuthStorageContext);
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    const response= await mutate({
      variables: { username, password },
    });
    await authStorage.setAccessToken(response.data.authorize.accessToken);
    client.resetStore();
    return response;
  };

  return [signIn, result];
};

export default useSignIn;