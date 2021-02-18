import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required'),
  password: yup
    .string()
    .required('password is required'),
});


export const initialValues = {
  username: '',
  password: '',
};