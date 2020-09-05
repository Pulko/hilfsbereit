import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, AppBar, Container } from '@material-ui/core';

import theme from 'theme/theme';

const useStyles = makeStyles((theme: Theme) => ({
  primaryHeader: {
    fontWeight: 700,
  },
  secondaryHeader: {
    fontWeight: 300,
  },
  header: {
    fontSize: '14px',
    padding: '10px 30px',
    lineHeight: 1.2,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary, 
      cursor: 'pointer',
    }
  },
  bar: {
    background: 'transparent',
    boxShadow: 'none',
  }
}))

const NavigationBar: React.FC = () => {
  const classes = useStyles(theme)

  return (
    <AppBar className={classes.bar}>
      <Container className={classes.header}>
        <Typography variant="subtitle1" className={classes.primaryHeader}>
          {'Hilfsbereit'}
        </Typography>

        <Typography variant="subtitle1" className={classes.secondaryHeader}>
          {'If you need a hand'}
        </Typography>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;