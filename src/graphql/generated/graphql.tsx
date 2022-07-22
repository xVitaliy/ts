import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTodoInputDto = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type EditTodoInputDto = {
  completed?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type GetTodosInputDto = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  editTodo: Todo;
  removeTodo: Todo;
};

export type MutationCreateTodoArgs = {
  data: CreateTodoInputDto;
};

export type MutationEditTodoArgs = {
  data: EditTodoInputDto;
};

export type MutationRemoveTodoArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  todo: Todo;
  todos: Todos;
};

export type QueryTodoArgs = {
  id: Scalars['ID'];
};

export type QueryTodosArgs = {
  data: GetTodosInputDto;
};

export type Subscription = {
  __typename?: 'Subscription';
  removedTodo: Todo;
  updatedTodo: Todo;
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Todos = {
  __typename?: 'todos';
  edges: Array<Todo>;
  total: Scalars['Float'];
};

export type TodosQueryVariables = Exact<{
  data: GetTodosInputDto;
}>;

export type TodosQuery = {
  __typename?: 'Query';
  todos: {
    __typename?: 'todos';
    total: number;
    edges: Array<{
      __typename?: 'Todo';
      title: string;
      description: string;
      completed: boolean;
      id: string;
    }>;
  };
};

export type CreateTodoMutationVariables = Exact<{
  data: CreateTodoInputDto;
}>;

export type CreateTodoMutation = {
  __typename?: 'Mutation';
  createTodo: {
    __typename?: 'Todo';
    title: string;
    description: string;
    completed: boolean;
    id: string;
  };
};

export type SubscriptionUpdateTodoSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type SubscriptionUpdateTodoSubscription = {
  __typename?: 'Subscription';
  updatedTodo: {
    __typename?: 'Todo';
    title: string;
    description: string;
    completed: boolean;
    id: string;
  };
};

export type UpdateTodoSubscriptionVariables = Exact<{ [key: string]: never }>;

export type UpdateTodoSubscription = {
  __typename?: 'Subscription';
  updatedTodo: {
    __typename?: 'Todo';
    title: string;
    description: string;
    completed: boolean;
    id: string;
  };
};

export type CompletedTodoMutationVariables = Exact<{
  data: EditTodoInputDto;
}>;

export type CompletedTodoMutation = {
  __typename?: 'Mutation';
  editTodo: {
    __typename?: 'Todo';
    title: string;
    description: string;
    completed: boolean;
    id: string;
  };
};

export type MutationMutationVariables = Exact<{
  removeTodoId: Scalars['ID'];
}>;

export type MutationMutation = {
  __typename?: 'Mutation';
  removeTodo: {
    __typename?: 'Todo';
    title: string;
    description: string;
    completed: boolean;
    id: string;
  };
};

export type RemoveTodoMutationVariables = Exact<{
  removeTodoId: Scalars['ID'];
}>;

export type RemoveTodoMutation = {
  __typename?: 'Mutation';
  removeTodo: {
    __typename?: 'Todo';
    title: string;
    description: string;
    completed: boolean;
    id: string;
  };
};

export type RemovedTodoSubscriptionVariables = Exact<{ [key: string]: never }>;

export type RemovedTodoSubscription = {
  __typename?: 'Subscription';
  removedTodo: {
    __typename?: 'Todo';
    title: string;
    description: string;
    completed: boolean;
    id: string;
  };
};

export const TodosDocument = gql`
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

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useTodosQuery(
  baseOptions: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options,
  );
}
export function useTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options,
  );
}
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<
  TodosQuery,
  TodosQueryVariables
>;
export const CreateTodoDocument = gql`
  mutation CreateTodo($data: CreateTodoInputDto!) {
    createTodo(data: $data) {
      title
      description
      completed
      id
    }
  }
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument,
    options,
  );
}
export type CreateTodoMutationHookResult = ReturnType<
  typeof useCreateTodoMutation
>;
export type CreateTodoMutationResult =
  Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export const SubscriptionUpdateTodoDocument = gql`
  subscription SubscriptionUpdateTodo {
    updatedTodo {
      title
      description
      completed
      id
    }
  }
`;

/**
 * __useSubscriptionUpdateTodoSubscription__
 *
 * To run a query within a React component, call `useSubscriptionUpdateTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionUpdateTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionUpdateTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscriptionUpdateTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    SubscriptionUpdateTodoSubscription,
    SubscriptionUpdateTodoSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    SubscriptionUpdateTodoSubscription,
    SubscriptionUpdateTodoSubscriptionVariables
  >(SubscriptionUpdateTodoDocument, options);
}
export type SubscriptionUpdateTodoSubscriptionHookResult = ReturnType<
  typeof useSubscriptionUpdateTodoSubscription
>;
export type SubscriptionUpdateTodoSubscriptionResult =
  Apollo.SubscriptionResult<SubscriptionUpdateTodoSubscription>;
export const UpdateTodoDocument = gql`
  subscription updateTodo {
    updatedTodo {
      title
      description
      completed
      id
    }
  }
`;

/**
 * __useUpdateTodoSubscription__
 *
 * To run a query within a React component, call `useUpdateTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUpdateTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UpdateTodoSubscription,
    UpdateTodoSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    UpdateTodoSubscription,
    UpdateTodoSubscriptionVariables
  >(UpdateTodoDocument, options);
}
export type UpdateTodoSubscriptionHookResult = ReturnType<
  typeof useUpdateTodoSubscription
>;
export type UpdateTodoSubscriptionResult =
  Apollo.SubscriptionResult<UpdateTodoSubscription>;
export const CompletedTodoDocument = gql`
  mutation CompletedTodo($data: EditTodoInputDto!) {
    editTodo(data: $data) {
      title
      description
      completed
      id
    }
  }
`;
export type CompletedTodoMutationFn = Apollo.MutationFunction<
  CompletedTodoMutation,
  CompletedTodoMutationVariables
>;

/**
 * __useCompletedTodoMutation__
 *
 * To run a mutation, you first call `useCompletedTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletedTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completedTodoMutation, { data, loading, error }] = useCompletedTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCompletedTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CompletedTodoMutation,
    CompletedTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CompletedTodoMutation,
    CompletedTodoMutationVariables
  >(CompletedTodoDocument, options);
}
export type CompletedTodoMutationHookResult = ReturnType<
  typeof useCompletedTodoMutation
>;
export type CompletedTodoMutationResult =
  Apollo.MutationResult<CompletedTodoMutation>;
export type CompletedTodoMutationOptions = Apollo.BaseMutationOptions<
  CompletedTodoMutation,
  CompletedTodoMutationVariables
>;
export const MutationDocument = gql`
  mutation Mutation($removeTodoId: ID!) {
    removeTodo(id: $removeTodoId) {
      title
      description
      completed
      id
    }
  }
`;
export type MutationMutationFn = Apollo.MutationFunction<
  MutationMutation,
  MutationMutationVariables
>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      removeTodoId: // value for 'removeTodoId'
 *   },
 * });
 */
export function useMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationMutation,
    MutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<MutationMutation, MutationMutationVariables>(
    MutationDocument,
    options,
  );
}
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<
  MutationMutation,
  MutationMutationVariables
>;
export const RemoveTodoDocument = gql`
  mutation removeTodo($removeTodoId: ID!) {
    removeTodo(id: $removeTodoId) {
      title
      description
      completed
      id
    }
  }
`;
export type RemoveTodoMutationFn = Apollo.MutationFunction<
  RemoveTodoMutation,
  RemoveTodoMutationVariables
>;

/**
 * __useRemoveTodoMutation__
 *
 * To run a mutation, you first call `useRemoveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoMutation, { data, loading, error }] = useRemoveTodoMutation({
 *   variables: {
 *      removeTodoId: // value for 'removeTodoId'
 *   },
 * });
 */
export function useRemoveTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveTodoMutation,
    RemoveTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(
    RemoveTodoDocument,
    options,
  );
}
export type RemoveTodoMutationHookResult = ReturnType<
  typeof useRemoveTodoMutation
>;
export type RemoveTodoMutationResult =
  Apollo.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = Apollo.BaseMutationOptions<
  RemoveTodoMutation,
  RemoveTodoMutationVariables
>;
export const RemovedTodoDocument = gql`
  subscription removedTodo {
    removedTodo {
      title
      description
      completed
      id
    }
  }
`;

/**
 * __useRemovedTodoSubscription__
 *
 * To run a query within a React component, call `useRemovedTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRemovedTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemovedTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRemovedTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    RemovedTodoSubscription,
    RemovedTodoSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    RemovedTodoSubscription,
    RemovedTodoSubscriptionVariables
  >(RemovedTodoDocument, options);
}
export type RemovedTodoSubscriptionHookResult = ReturnType<
  typeof useRemovedTodoSubscription
>;
export type RemovedTodoSubscriptionResult =
  Apollo.SubscriptionResult<RemovedTodoSubscription>;
