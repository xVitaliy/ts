import { Box, Button, styled, Typography } from '@mui/material';

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

export const TypographyStyled = styled(Typography)(({ props }: TProps) => {
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

export const Flex = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ButtonStyled = styled(Button)(({ disabled }) => {
  return {
    borderRadius: '4px',
    width: '100%',
    height: '60px',
    fontSize: '30px',
    color: disabled ? '#123' : '#ffffff',
    backgroundColor: disabled ? '#7c7c7c' : '#1010c2',
    '&:hover': {
      backgroundColor: '#0000ff !important',
    },
  };
});
