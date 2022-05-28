import { createTheme } from '@mui/material';
import { components } from './components';
import * as foundation from './foundations';

export const theme = createTheme({
  components,
  ...foundation,
});
