import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as ChildIcon } from '../Icons/headerChild.svg';
import { ReactComponent as MenuListIcon_1 } from '../Icons/menu1.svg';
import { ReactComponent as MenuListIcon_2 } from '../Icons/menu2.svg';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Container } from '@mui/material';
import { SearchIcon } from '../Icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaperPropsStyle } from './styles';
import { MAIN_DRAWER_NAVIGATE_OBJECTS } from '../../constant';
import { MainMenuItemCustom } from '../MainMenuItemCustom/MainMenuItemCustom';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorMainEl, setAnchorMainEl] = React.useState<null | HTMLElement>(
    null,
  );
  const [token, setToken] = useState<string | null>('');
  const navigate = useNavigate();

  const goRegisterPage = () => {
    setAnchorEl(null);
    navigate('registration');
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenMainMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMainEl(event.currentTarget);
  };

  const handleNavigate = (url: string): void => {
    navigate(url);
    setAnchorMainEl(null);
  };

  useEffect(() => {
    setToken(localStorage.getItem('myToken'));
  }, [localStorage.getItem('myToken')]);

  const logOut = () => {
    setAnchorEl(null);
    localStorage.removeItem('myToken');
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color={'primary'}>
        <Container maxWidth={'xl'}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={handleOpenMainMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='main-menu'
              anchorEl={anchorMainEl}
              open={Boolean(anchorMainEl)}
              onClose={() => setAnchorMainEl(null)}
              PaperProps={PaperPropsStyle}
              transformOrigin={{ horizontal: 'left', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
              {MAIN_DRAWER_NAVIGATE_OBJECTS.map(
                ({ id, link, avatarName, avatarRrc, title }) => {
                  return (
                    <MainMenuItemCustom
                      key={id}
                      title={title}
                      avatarName={avatarName}
                      avatarRrc={avatarRrc}
                      url={link}
                      handleNavigate={handleNavigate}
                    />
                  );
                },
              )}
            </Menu>
            <Typography variant='caption' component='div' sx={{ flexGrow: 1 }}>
              el Inputto
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton onClick={handleMenu}>
              <ChildIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              PaperProps={PaperPropsStyle}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={logOut}>
                <MenuListIcon_1 onClick={logOut} />
                {!token ? 'Увійти' : 'Вийти'}
              </MenuItem>
              <MenuItem onClick={goRegisterPage}>
                <MenuListIcon_2 />
                Зареєструватись
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
