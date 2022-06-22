import React, { ReactNode } from 'react';
import { Box, CardMedia, Container, Typography } from '@mui/material';
import {
  CardContentStyled,
  CardStyled,
  CardWrapperStyled,
  TitleStyled,
} from './styles';

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
