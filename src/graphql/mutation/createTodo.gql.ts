import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation CreateTodo($data: CreateTodoInputDto!) {
    createTodo(data: $data) {
      title
      description
      completed
      id
    }
  }
`;
