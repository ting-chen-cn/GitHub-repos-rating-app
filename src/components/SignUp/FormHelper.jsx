import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1)
    .max(30)
    .required('username is required'),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required('password is required'),
  confirmedPassword: yup
    .string()
    .required('password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});


export const initialValues = {
  username: '',
  password: '',
  confirmedPassword:'',
};