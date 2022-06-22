import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { FacebookIcon, GoogleIcon, LinkedInIcon, TwitterIcon } from '../Icons';
import {
  BlockStyled,
  HorizontalLine,
  SocialBlockStyled,
  SocialWrapperStyled,
} from './styles';

export const SocialBlock = memo(() => {
  const socialIcon = [
    { icon: <GoogleIcon /> },
    { icon: <FacebookIcon /> },
    { icon: <TwitterIcon /> },
    { icon: <LinkedInIcon /> },
  ];

  return (
    <SocialWrapperStyled>
      <BlockStyled>
        <HorizontalLine />
        <Box>
          <Typography variant={'h6'}>або</Typography>
        </Box>
        <HorizontalLine />
      </BlockStyled>
      <BlockStyled>
        <Typography variant={'h6'}>вхід через соцмережі</Typography>
      </BlockStyled>
      <SocialBlockStyled>
        {socialIcon.map((item, i) => (
          <IconButton key={i}>{item.icon}</IconButton>
        ))}
      </SocialBlockStyled>
    </SocialWrapperStyled>
  );
});

SocialBlock.displayName = 'SocialBlock';
