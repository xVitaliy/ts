import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../queries/getTodos';

// @ts-ignore
export const useGetTodos = (options) => {
  // return GET_TODOS({
  //   ...options,
  // });
  return useQuery(GET_TODOS, options);
};
