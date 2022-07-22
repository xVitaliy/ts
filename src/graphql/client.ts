import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import create from 'zustand';

type ErrorType = {
  hasError: boolean;
  error: any;
  date: number | undefined;
};

export const useErrorsStore = create<ErrorType>(() => ({
  hasError: false,
  error: undefined,
  date: undefined,
}));

const httpLink = createUploadLink({
  uri: `http://localhost:4000/graphql`,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:4000/graphql',
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    for (const graphQLError of graphQLErrors) {
      console.log('graphQLError: ', graphQLError);

      if (graphQLError.message === 'Context creation failed: INVALID_TOKEN') {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
      }

      useErrorsStore.setState({
        hasError: true,
        error: graphQLError,
        date: Date.now(),
      });
    }
  } else if (networkError) {
    console.log('networkError: ', networkError);

    useErrorsStore.setState({
      hasError: true,
      error: networkError,
      date: Date.now(),
    });
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, splitLink]),
  cache: new InMemoryCache(),
});

//{
//     typePolicies: {
//       Query: {
//         fields: {
//           todos: {
//             keyArgs: ['skip'],
//             merge: true,
//             //can take keyArgs if is need
//             // merge: (existing: any, incoming: any) => {
//             //   console.log('client', existing, incoming);
//             //   const prevEdges = existing?.edges || [];
//             //   const incomingEdges = incoming?.edges || [];
//             //   return {
//             //     ...incoming,
//             //     edges: [...prevEdges, ...incomingEdges],
//             //   };
//             // },
//           },
//         },
//       },
//     },
//   }
