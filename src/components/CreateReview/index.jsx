import React from 'react';
import { useHistory } from "react-router-native";
import { useMutation } from '@apollo/react-hooks';
import { FormContainer } from './FormContainer';
import {CREATE_REVIEW} from '../../graphql/mutations';


const CreateReview = () => {
  const history = useHistory();
  const [createReview] = useMutation(CREATE_REVIEW);

  const onSubmit =async (values) => {
    const { repositoryName, ownerName, rating , text } = values;
    try {
      const res = await createReview({
      variables: { repositoryName, ownerName, rating: Number(rating) , text },
    });
      console.log(res);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
};
  return <FormContainer onSubmit={onSubmit} />;
};

export default CreateReview;