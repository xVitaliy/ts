import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import * as React from 'react';

type MainMenuItemCustomTypes = {
  title: string;
  avatarName: string;
  avatarRrc: string;
  url: string;
  // eslint-disable-next-line no-unused-vars
  handleNavigate: (url: string) => void;
};

export const MainMenuItemCustom = ({
  handleNavigate,
  title,
  avatarName,
  avatarRrc,
  url,
}: MainMenuItemCustomTypes) => {
  return (
    <MenuItem onClick={() => handleNavigate(url)}>
      <Avatar src={avatarRrc} alt={avatarRrc}>
        {avatarName}
      </Avatar>
      {title}
    </MenuItem>
  );
};
