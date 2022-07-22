/* eslint-disable */
import { useCompletedTodo } from '../../graphql/hooks/useMutations/useCompletedTodo';
import { useRemoveTodo } from '../../graphql/hooks/useMutations/useRemoveTodo';
import { GET_TODOS } from '../../graphql/queries/getTodos';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  DeleteTodo,
  IconBtnsWrap,
  TypographyStyled,
  ListWrapper,
} from './styles';
import React from 'react';
import { Query } from '../../graphql/generated/graphql';

type TodosListProps = {
  data: Query;
};

export const TodosList = ({ data }: TodosListProps) => {
  const [completedTodoMutation] = useCompletedTodo();
  const [removeTodoMutation] = useRemoveTodo();

  const handleChangeCompletedTodo = (edge) => {
    completedTodoMutation({
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
    </>
  );
};
