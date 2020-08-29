import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D2FD9B',
      contrastText: '#3B3871'
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#3B3871',
    },
    background: {
      default: '#5A56AB',
      paper: '#948EFD',
    },
    action: {
      active: '#D2FD9B',
    },
    text: {
      primary: '#D2FD9B',
      secondary: '#FFFFFF',
    },
  },
});

export default theme;