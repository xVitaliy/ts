/* eslint-disable */
import { Box, Button, TextField } from '@mui/material';
import { useGetTodos } from '../../graphql/hooks/useQueries/useGetTodos';
import { Formik, Form } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { useCreateTodo } from '../../graphql/hooks/useMutations/useCreateTodos';

export const TestingGqlPage = () => {
  const { data } = useGetTodos({
    variables: {
      data: {
        limit: null,
      },
    },
  });

  const [createTodoMutation] = useCreateTodo();

  const handleSubmit = (values) => {
    createTodoMutation({
      variables: {
        data: values,
      },
    });
  };

  // const [createTodoMutation] = useCreateTodo({
  //   variables: {
  //     data: values,
  //   },
  // });
  //
  // const handleSubmit = (values) => {
  //   createTodoMutation(values);
  // };

  console.log(data);
  return (
    <Box>
      <Box maxWidth={'200px'}>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            title: '',
            description: '',
          }}
        >
          <Form>
            <TextFieldFormik name={'title'} />
            <TextFieldFormik name={'description'} />
            <Button type={'submit'} variant={'contained'}>
              getTodos
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
