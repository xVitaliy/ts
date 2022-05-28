import React, { ReactNode } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  styled,
  Typography,
} from '@mui/material';

type AuthWrapperProps = {
  children: ReactNode;
  image: string;
  alt: string;
  title: string;
  formTitle: string;
};
export const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
  image,
  alt,
  title,
  formTitle,
}) => {
  return (
    <Container maxWidth={'xl'}>
      <TitleStyled>
        <Typography variant={'h1'}>{title}</Typography>
      </TitleStyled>
      <CardWrapperStyled>
        <CardStyled>
          <CardMedia
            component='img'
            image={image}
            alt={alt}
            sx={{ width: '336px' }}
          />
          <CardContentStyled>
            <Box sx={{ color: '#44474F', marginBottom: '40px' }}>
              <Typography variant={'h2'}>{formTitle}</Typography>
            </Box>
            {children}
          </CardContentStyled>
        </CardStyled>
      </CardWrapperStyled>
    </Container>
  );
};
// Вхід Привіт! Знову.
const TitleStyled = styled(Box)({
  margin: '64px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#001A42',
});

const CardWrapperStyled = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CardStyled = styled(Card)({
  display: 'flex',
  height: '100%',
  maxHeight: '556px',
  borderRadius: '24px',
  filter: 'drop-shadow(0px 4px 40px rgba(9, 173, 234, 0.05))',
});

const CardContentStyled = styled(CardContent)({
  padding: '40px',
});
