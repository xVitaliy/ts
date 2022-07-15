import { gql } from '@apollo/client';

export const REMOVE_TODO = gql`
  mutation removeTodo($removeTodoId: ID!) {
    removeTodo(id: $removeTodoId) {
      title
      description
      completed
      id
    }
  }
`;
