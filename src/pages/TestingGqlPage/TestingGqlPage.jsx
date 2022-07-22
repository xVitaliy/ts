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

export const TestingGqlPage = () => {
  const { handleClickVariant } = useAlert();

  // eslint-disable-next-line no-unused-vars
  const { data, refetch } = useGetTodos({
    variables: {
      data: {
        limit: null,
      },
    },
  });

  const [createTodoMutation] = useCreateTodo();

  const handleSubmit = (values, { resetForm }) => {
    createTodoMutation({
      variables: {
        data: values,
      },
      refetchQueries: [GET_TODOS],
      onCompleted: () => resetForm(),
      // eslint-disable-next-line no-unused-vars
      // update: (cache, { data }) =>
      //   cache.readQuery({
      //     query: GET_TODOS,
      //   }),
    });
  };
  //update(cache, { data }) {
  //         if (data?.removeOrderFromCart?.status) {
  //           const variables = {
  //             authKey: AUTH_KEY() as string,
  //           };
  //           const cacheData = cache.readQuery<GetCartQuery>({
  //             query: GET_CART,
  //             variables,
  //           });
  const { data: updatedTodoSubscription } = useUpdatedTodoSubscription();
  const { data: removeTodoSubscription } = useRemoveTodoSubscription();

  useEffect(() => {
    if (data) {
      handleClickVariant('success');
    }
    //todo
    // refetch();
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
