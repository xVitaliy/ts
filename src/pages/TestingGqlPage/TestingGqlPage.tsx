import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useGetTodos } from '../../graphql/hooks/useQueries/useGetTodos';
import { Formik, Form } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { useCreateTodo } from '../../graphql/hooks/useMutations/useCreateTodos';
import { useUpdatedTodoSubscription } from '../../graphql/hooks/useSubscribes/useUpdatedTodoSubscription';

import { useEffect, useRef, useState } from 'react';
import { useRemoveTodoSubscription } from '../../graphql/hooks/useSubscribes/useRemoveTodoSubscription';
import { TodosList } from '../../components/TodosList/TodosList';
import { InputBlock, ComponentBlock } from './styles';
import { SubscriptionBlock } from '../../components/SubscriptionBlock/SubscriptionBlock';
import { useAlert } from '../../hook/useAlert';
import { SearchCustomComponent } from '../../components/SearchCustom/SearchCustom';

export const TestingGqlPage = () => {
  const [title, setTitle] = useState('');
  const { handleClickVariant } = useAlert();
  const countSkip = useRef(0);

  const { data, fetchMore, refetch } = useGetTodos({
    variables: {
      data: {
        limit: 5,
        skip: countSkip.current,
        title: title,
      },
    },
  });

  const [createTodoMutation] = useCreateTodo();

  const handleSubmit = (values, { resetForm }) => {
    return createTodoMutation({
      variables: {
        data: values,
      },
      onCompleted: () => resetForm(),
    });
  };

  const { data: updatedTodoSubscription } = useUpdatedTodoSubscription();

  const { data: removeTodoSubscription } = useRemoveTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      client.cache.modify({
        fields: {
          todos(currentTodo) {
            return {
              __typename: 'todos',
              total: currentTodo?.total - 1,
              edges: currentTodo?.edges?.filter(
                (todo) =>
                  todo?.__ref !==
                  `Todo:${subscriptionData.data.removedTodo.id}`,
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

  const handleMore = async () => {
    countSkip.current += 1;
    await fetchMore({
      variables: {
        data: {
          limit: 5,
          skip: countSkip.current * 5,
          title: title,
        },
      },
    });
  };

  const searchTodo = async (text: string) => {
    countSkip.current = 0;
    await setTitle(text);
    await refetch();
  };

  return (
    <Box p={'20px'}>
      <Box>
        <Typography variant={'h2'}>Search Todo</Typography>
        <Box mb={3}>
          <SearchCustomComponent searchTodo={searchTodo} />
        </Box>

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
                    sx={{ width: '350px' }}
                    name={'title'}
                    label={'Title'}
                  />
                  <TextFieldFormik
                    sx={{ width: '350px' }}
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
          <TodosList data={data} handleMore={handleMore} />
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
