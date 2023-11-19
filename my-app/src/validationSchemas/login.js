import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email:yup
        .string()
        .email()
        .required('email is required'),
    
    password: yup
        .string()
        .min(5,'Too Short!')
        .max(1000,'Too long!')
        .required('Password is required')
})