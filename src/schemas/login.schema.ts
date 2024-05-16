import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
   .string()
   .email('Este campo deve ser um email.')
   .required('Este campo é obrigatório.'),
  password: yup
   .string()
   .required('Este campo é obrigatório.'),
});

export default loginSchema;