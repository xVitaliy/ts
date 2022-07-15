import { gql } from '@apollo/client';

export const SUBSCRIPTION_UPDATE_TODO = gql`
  subscription updateTodo {
    updatedTodo {
      title
      description
      completed
      id
    }
  }
`;
