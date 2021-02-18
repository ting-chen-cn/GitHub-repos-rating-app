import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState();
  // const fetchRepositories = async () => {
  //   setLoading(true);
  //   const response = await fetch('http://192.168.1.6:5000/api/repositories');
  //   const json = await response.json();
  //   setLoading(false);
  //   setRepositories(json);
  // };
  
  const { data, error, loading } = useQuery(GET_REPOSITORIES);
  useEffect(() => {
    if (!error && !loading) {
    setRepositories(data.repositories);
  }
  }, [error,loading]);
  
  return { repositories, loading, refetch: useQuery(GET_REPOSITORIES) };
};

export default useRepositories;