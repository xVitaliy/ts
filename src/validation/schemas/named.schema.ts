import * as yup from 'yup';
import * as MESSAGES from '../message';

export const namedSchema = () => {
  return yup.object().shape({
    emailOrLogin: yup.string().required(MESSAGES.REQUIRED_FIELD),
    confirm: yup.bool().oneOf([true]),
  });
};
