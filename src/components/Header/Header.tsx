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

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [token, setToken] = useState<string | null>('');
  const navigate = useNavigate();

  const goRegisterPage = () => {
    setAnchorEl(null);
    navigate('registration');
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
            >
              <MenuIcon />
            </IconButton>
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
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  background:
                    'linear-gradient(0deg, rgba(46, 93, 168, 0.11), rgba(46, 93, 168, 0.11)), #FDFBFF',
                  boxShadow:
                    '0px 8px 12px 6px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.1)',
                  mt: '15px',
                  borderRadius: '24px',
                  width: '360px',
                  '& .MuiList-root': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '16px',
                  },
                  '& .MuiMenuItem-root': {
                    height: '48px',
                    borderRadius: '24px',
                    gap: '16px',
                    '&:hover': {
                      background: 'rgba(68, 71, 79, 0.08)',
                    },
                  },
                },
              }}
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
