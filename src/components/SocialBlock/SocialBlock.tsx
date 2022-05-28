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
        <IconButton>
          <GoogleIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </SocialBlockStyled>
    </SocialWrapperStyled>
  );
});

SocialBlock.displayName = 'SocialBlock';
