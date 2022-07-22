import { Box, styled, Typography } from '@mui/material';

export const ListWrapper = styled(Box)({
  border: '2px solid black',
  marginBottom: '10px',
  padding: '10px',
});

export const IconBtnsWrap = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

type TProps = {
  props?: string | null;
};

export const TypographyStyled = styled(Typography)<TProps>(({ props }) => {
  return {
    textDecoration: props === 'true' ? 'line-through' : '',
    span: {
      color: 'red',
    },
  };
});

export const DeleteTodo = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
});
