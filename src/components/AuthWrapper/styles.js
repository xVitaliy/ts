import { Box, Card, CardContent, styled } from '@mui/material';

export const TitleStyled = styled(Box)({
  margin: '64px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#001A42',
});

export const CardWrapperStyled = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CardStyled = styled(Card)({
  display: 'flex',
  height: '100%',
  maxHeight: '556px',
  borderRadius: '24px',
  filter: 'drop-shadow(0px 4px 40px rgba(9, 173, 234, 0.05))',
});

export const CardContentStyled = styled(CardContent)({
  padding: '40px',
});
