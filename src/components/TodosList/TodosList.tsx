import { useCompletedTodo } from '../../graphql/hooks/useMutations/useCompletedTodo';
import { useRemoveTodo } from '../../graphql/hooks/useMutations/useRemoveTodo';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  DeleteTodo,
  IconBtnsWrap,
  TypographyStyled,
  ListWrapper,
  ButtonStyled,
  Flex,
} from './styles';
import React from 'react';
import { TodosQuery } from '../../graphql/generated/graphql';
import { client } from '../../graphql/client';
import { GET_TODOS } from '../../graphql/queries/getTodos';

type TodosListProps = {
  data?: TodosQuery;
  handleMore: () => void;
};

export const TodosList = ({ data, handleMore }: TodosListProps) => {
  const [completedTodoMutation] = useCompletedTodo();
  const [removeTodoMutation] = useRemoveTodo();

  const handleChangeCompletedTodo = async (edge) => {
    await completedTodoMutation({
      variables: {
        data: {
          id: edge.id,
          title: edge.title,
          description: edge.description,
          completed: !edge.completed,
        },
      },
    });
  };

  const handleRemoveTodo = async (id) => {
    await removeTodoMutation({
      variables: {
        removeTodoId: id,
      },
    });
  };

  const cacheTodosData = client.cache.readQuery<TodosQuery>({
    query: GET_TODOS,
  });

  const allTodosReceived = () => {
    const todos = cacheTodosData?.todos;
    return todos?.edges.length === todos?.total;
  };

  return (
    <>
      {data?.todos?.edges.map((edge) => (
        <ListWrapper key={edge.id}>
          <TypographyStyled props={edge?.completed.toString()}>
            Title: <span>{edge.title}</span>
          </TypographyStyled>
          <TypographyStyled props={edge?.completed?.toString()}>
            Description: <span>{edge.description}</span>
          </TypographyStyled>
          <IconBtnsWrap>
            <FormControlLabel
              control={
                <Checkbox
                  color='secondary'
                  checked={edge?.completed}
                  onChange={() => handleChangeCompletedTodo(edge)}
                />
              }
              label='Completed'
            />
            <DeleteTodo>
              <IconButton onClick={() => handleRemoveTodo(edge.id)}>
                <DeleteIcon sx={{ fill: 'red' }} />
              </IconButton>
              <Typography>Delete Todo</Typography>
            </DeleteTodo>
          </IconBtnsWrap>
        </ListWrapper>
      ))}
      <Flex>
        <ButtonStyled disabled={allTodosReceived()} onClick={handleMore}>
          Load More
        </ButtonStyled>
      </Flex>
    </>
  );
};
