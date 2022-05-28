import { Box, styled } from '@mui/material';

export const HorizontalLine = styled(Box)({
  display: 'flex',
  width: '100%',
  height: 0,
  border: '1px solid rgba(196, 196, 196, 0.54)',
});

export const BlockStyled = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  color: '#74777F',
});

export const SocialWrapperStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '104px',
  marginBottom: '40px',
});

export const SocialBlockStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 48px',
});
