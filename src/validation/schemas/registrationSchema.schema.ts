import * as yup from 'yup';
import * as MESSAGES from '../message';

export const registrationSchema = () => {
  return yup.object().shape({
    emailOrLogin: yup.string().required(MESSAGES.REQUIRED_FIELD),
    password: yup
      .string()
      .test(
        'password',
        MESSAGES.PASSWORD_LENGTH_MESSAGE,
        (val) => String(val).length >= 8 && String(val).length <= 15,
      )
      .required(MESSAGES.REQUIRED_FIELD),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], MESSAGES.COINCIDENCE_PASSWORD)
      .required(MESSAGES.REQUIRED_FIELD),
  });
};
