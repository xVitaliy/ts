import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query Todos($data: GetTodosInputDto!) {
    todos(data: $data) {
      total
      edges {
        title
        description
        completed
        id
      }
    }
  }
`;
