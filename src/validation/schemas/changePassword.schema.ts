import * as yup from 'yup';
import * as MESSAGES from '../message';

export const changePasswordSchema = () => {
  return yup.object().shape({
    password: yup
      .string()
      .test(
        'password',
        MESSAGES.PASSWORD_LENGTH_MESSAGE,
        (val) => String(val).length >= 8 && String(val).length <= 15,
      )
      .required(MESSAGES.REQUIRED_FIELD),
    newPassword: yup
      .string()
      .oneOf([yup.ref('password')], MESSAGES.COINCIDENCE_PASSWORD)
      .required(MESSAGES.REQUIRED_FIELD),
    confirm: yup.bool().oneOf([true]),
  });
};
