import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { makeStyles, Theme, Button } from '@material-ui/core';

import classnames from 'helpers/classnames';

import theme from 'theme/theme';
import NavigationBar from 'components/AppBar/NavigationBar';


const useStyles = makeStyles((theme: Theme) => ({
  contrastTextColor: {
    color: theme.palette.primary.contrastText,
  },
  boldText: {
    fontWeight: 700,
  },
  thinText: {
    fontWeight: 300,
  },
  limitedWidth: {
    maxWidth: '70%',
  },
  primaryBackground: {
    background: theme.palette.action.active,
  },
  contrastText: {
    color: theme.palette.primary.contrastText,
  },
  secondaryTextColor: {
    color: theme.palette.text.secondary,
  },
  primaryButton: {
    marginTop: '30px',
    '&:hover': {
      background: theme.palette.action.active,
    },
  },
  secondaryCta: {
    padding: '300px 0 100px 0',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: '50px',
  },
  content: {
    paddingTop: '300px',
    paddingBottom: '100px',
  },
  link: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    '&:hover': {
      textDecoration: 'none',
      borderBottom: `10px solid ${theme.palette.primary.main}`,
      transition: 'all .3s',
    },
  },
}))

const CreateList: React.FC = () => {
  const classes = useStyles(theme)

  return (
    <div className={classnames(['main-page'])}>
      <NavigationBar />
      <Container className={classes.content}>
        <Typography
          variant="h1"
          className={classnames([classes.secondaryTextColor, classes.limitedWidth, classes.thinText])}
        >
          {'ZZZZZZUUUUP!'}
        </Typography>
        
      </Container>
    </div>
  );
}

export default CreateList;
