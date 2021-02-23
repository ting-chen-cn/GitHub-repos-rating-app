import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  repositoryName: yup
    .string()
    .required('Repository owner name is required'),
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  rating: yup
    .number()
    .integer()
    .min(1)
    .max(100)
    .required('Rating is required'),
  text:yup.string()
});


export const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text:''
};