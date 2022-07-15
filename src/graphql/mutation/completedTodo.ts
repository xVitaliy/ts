import { gql } from '@apollo/client';

export const COMPLETED_TODO = gql`
  mutation CompletedTodo($data: EditTodoInputDto!) {
    editTodo(data: $data) {
      title
      description
      completed
      id
    }
  }
`;
