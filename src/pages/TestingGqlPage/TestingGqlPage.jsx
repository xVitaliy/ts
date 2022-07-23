/* eslint-disable */
import { Box, Button, Typography } from '@mui/material';
import { useGetTodos } from '../../graphql/hooks/useQueries/useGetTodos';
import { Formik, Form } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { useCreateTodo } from '../../graphql/hooks/useMutations/useCreateTodos';
import { useUpdatedTodoSubscription } from '../../graphql/hooks/useSubscribes/useUpdatedTodoSubscription';
import { GET_TODOS } from '../../graphql/queries/getTodos';

import { useEffect } from 'react';
import { useRemoveTodoSubscription } from '../../graphql/hooks/useSubscribes/useRemoveTodoSubscription';
import { TodosList } from '../../components/TodosList/TodosList';
import { InputBlock, ComponentBlock } from './styles';
import { SubscriptionBlock } from '../../components/SubscriptionBlock/SubscriptionBlock';
import { useAlert } from '../../hook/useAlert';
import { useMutation } from '@apollo/client';
import { CREATE_TODO } from '../../graphql/mutation/createTodo.gql';

export const TestingGqlPage = () => {
  const { handleClickVariant } = useAlert();

  // eslint-disable-next-line no-unused-vars
  const { data } = useGetTodos({
    variables: {
      data: {
        limit: null,
      },
    },
  });

  const [createTodoMutation] = useCreateTodo();
  // const [createTodo] = useMutation(CREATE_TODO, {
  //   update(cache) {
  //     console.log(cache.readQuery({ query: GET_TODOS }));
  //   },
  // });

  const handleSubmit = (values, { resetForm }) => {
    return createTodoMutation({
      variables: {
        data: values,
      },
      onCompleted: () => resetForm(),

      // update(cache, { data: { createTodo } }) {
      //   const { todos } = cache.readQuery({
      //     query: GET_TODOS,
      //     variables: {
      //       data: {
      //         limit: null,
      //       },
      //     },
      //   });
      //   const newTotal = todos?.total + 1;
      //
      //   cache.writeQuery({
      //     query: GET_TODOS,
      //     variables: {
      //       data: {
      //         limit: null,
      //       },
      //     },
      //     data: {
      //       todos: {
      //         __typename: 'todos',
      //         total: newTotal,
      //         edges: [...todos.edges, createTodo],
      //       },
      //     },
      //   });
      // },
    });
  };

  const { data: updatedTodoSubscription } = useUpdatedTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      console.log(subscriptionData.data.updatedTodo);
      client.cache.modify({
        fields: {
          todos(currentTodo = []) {
            return {
              __typename: 'todos',
              total: currentTodo.total + 1,
              edges: [...currentTodo.edges, currentTodo],
            };
          },
        },
      });
    },
  });

  const { data: removeTodoSubscription } = useRemoveTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      client.cache.modify({
        fields: {
          todos(currentTodo = []) {
            return {
              __typename: 'todos',
              total: currentTodo.total - 1,
              edges: currentTodo.edges?.filter(
                (todo) =>
                  todo.__ref !== `Todo:${subscriptionData.data.removedTodo.id}`,
              ),
            };
          },
        },
      });
    },
  });

  useEffect(() => {
    if (data) {
      handleClickVariant('success');
    }
  }, [updatedTodoSubscription, removeTodoSubscription]);

  return (
    <Box p={'20px'}>
      <Box>
        <Typography variant={'h2'}>Create Todo</Typography>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            title: '',
            description: '',
          }}
        >
          {({ values }) => {
            return (
              <Form>
                <InputBlock>
                  <TextFieldFormik
                    sx={{ width: '200px' }}
                    name={'title'}
                    label={'Title'}
                  />
                  <TextFieldFormik
                    sx={{ width: '200px' }}
                    name={'description'}
                    label={'Description'}
                  />
                  <Button
                    disabled={
                      !(
                        values.title.trim().length &&
                        values.description.trim().length
                      )
                    }
                    type={'submit'}
                    variant={'contained'}
                  >
                    getTodos
                  </Button>
                </InputBlock>
              </Form>
            );
          }}
        </Formik>
      </Box>
      <Box sx={{ display: 'flex', gap: '50px' }}>
        <ComponentBlock>
          <TodosList data={data} />
        </ComponentBlock>
        <ComponentBlock>
          <SubscriptionBlock
            updatedTodoSubscription={updatedTodoSubscription}
            removeTodoSubscription={removeTodoSubscription}
          />
        </ComponentBlock>
      </Box>
    </Box>
  );
};
