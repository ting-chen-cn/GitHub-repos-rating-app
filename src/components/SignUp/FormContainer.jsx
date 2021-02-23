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
        <FormikTextInput style={styles.input} name="username" placeholder="Username" />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput style={styles.input} name="password" placeholder="Password"  secureTextEntry={ true } />
      </View>
      <View style={styles.inputContainer}>
        <FormikTextInput style={styles.input} name="confirmedPassword" placeholder="Password confirmation"  secureTextEntry={ true } />
      </View>
      <View >
        <Button onPress={onSubmit} testID="signInSubmitButton" >Sign up</Button>
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