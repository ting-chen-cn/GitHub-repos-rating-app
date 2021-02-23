import React from 'react';
import { Formik} from 'formik';
import { View } from 'react-native';
import { styles } from './Styles';
import FormikTextInput from './FormikTextInput';
import { validationSchema, initialValues } from './FormHelper';
import Button from '../Button';


const Form = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormikTextInput style={styles.input}  name="repositoryName" placeholder="Repository's  username" />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput style={styles.input}  name="ownerName" placeholder="Repository owner's name "   />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput style={styles.input}  name="rating" placeholder="Rating between 0 and 100"   />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput style={styles.input}  name="text" placeholder=""  multiline={true} />
      </View>
      <View >
        <Button onPress={onSubmit} testID="signInSubmitButton" >create review</Button>
      </View>
      
    </View>
  );
};

export const FormContainer = ({onSubmit}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  );
};