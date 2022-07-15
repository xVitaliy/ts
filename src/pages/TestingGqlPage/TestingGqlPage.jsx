/* eslint-disable */
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useGetTodos } from '../../graphql/hooks/useQueries/useGetTodos';
import { Formik, Form } from 'formik';
import { TextFieldFormik } from '../../components/uiKit/TextFieldFormik/TextFieldFormik';
import { useCreateTodo } from '../../graphql/hooks/useMutations/useCreateTodos';
import { useUpdatedTodoSubscription } from '../../graphql/hooks/useSubscribes/useUpdatedTodoSubscription';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { GET_TODOS } from '../../graphql/queries/getTodos';
import { useCompletedTodo } from '../../graphql/hooks/useMutations/useCompletedTodo';
import { useRemoveTodo } from '../../graphql/hooks/useMutations/useRemoveTodo';
import { SnackbarProvider, useSnackbar } from 'notistack';

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
      refetchQueries: [GET_TODOS],
    });
  };

  const { data: dataSubs } = useUpdatedTodoSubscription();

  return (
    <SnackbarProvider>
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
            <Form>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
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
                <Button type={'submit'} variant={'contained'}>
                  getTodos
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
        <Box>
          <TodosList data={data} />
        </Box>
      </Box>
    </SnackbarProvider>
  );
};

export const TodosList = ({ data }) => {
  const [completedTodoMutation] = useCompletedTodo();
  const [removeTodoMutation] = useRemoveTodo();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleChangeCompletedTodo = (edge) => {
    completedTodoMutation({
      variables: {
        data: {
          id: edge.id,
          title: edge.title,
          description: edge.description,
          completed: !edge.completed,
        },
        refetchQueries: [GET_TODOS],
      },
    });
  };

  const handleRemoveTodo = (id) => {
    removeTodoMutation({
      variables: {
        removeTodoId: id,
      },
      refetchQueries: [GET_TODOS],
    });
  };

  return (
    <>
      {data?.todos?.edges.map((edge) => (
        <ListWrapper key={edge.id}>
          <TypographyStyled props={edge?.completed.toString()}>
            title: <span>{edge.title}</span>
          </TypographyStyled>
          <TypographyStyled props={edge?.completed.toString()}>
            description: <span>{edge.description}</span>
          </TypographyStyled>
          <IconBtnsWrap>
            <FormControlLabel
              color='secondary'
              control={
                <Checkbox
                  checked={edge?.completed}
                  onChange={() => handleChangeCompletedTodo(edge)}
                />
              }
              label='Completed'
            />
            <DeleteTodo>
              <IconButton onClick={() => handleRemoveTodo(edge.id)}>
                <DeleteIcon />
              </IconButton>
              <Typography>Delete Todo</Typography>
            </DeleteTodo>
          </IconBtnsWrap>
        </ListWrapper>
      ))}
    </>
  );
};

export const ListWrapper = styled(Box)({
  border: '2px solid black',
  marginBottom: '10px',
  padding: '10px',
});

export const IconBtnsWrap = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const TypographyStyled = styled(Typography)(({ props }) => {
  return {
    textDecoration: props === 'true' && 'line-through',
    span: {
      color: 'red',
    },
  };
});
export const DeleteTodo = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
});
