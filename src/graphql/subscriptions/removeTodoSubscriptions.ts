import { gql } from '@apollo/client';

export const SUBSCRIPTION_REMOVE_TODO = gql`
  subscription removedTodo {
    removedTodo {
      title
      description
      completed
      id
    }
  }
`;
