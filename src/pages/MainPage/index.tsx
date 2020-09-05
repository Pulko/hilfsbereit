import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { makeStyles, Theme, Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';

import classnames from 'helpers/classnames';

import theme from 'theme/theme';

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
  link: {
    display: 'flex',
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
}))

const MainPage: React.FC = () => {
  const classes = useStyles(theme)

  return (
    <>
      <Container className={classes.content}>
        <Typography
          variant="h1"
          className={classnames([classes.secondaryTextColor, classes.limitedWidth, classes.thinText])}
        >
          {'Plan and share'}
        </Typography>

        <Typography
          variant="subtitle1"
          className={classnames([classes.subtitle, classes.secondaryTextColor, classes.limitedWidth, classes.thinText])}
        >
          {'Create your planning lists.'}
          <br />
          {'Share your goals with your friends.'}
        </Typography>

          <Button className={classnames([classes.primaryBackground, classes.primaryButton])}>
            <Link href="/create" className={classes.link}>
              <Typography className={classnames([classes.contrastText, classes.boldText])}>
                {'get strarted'}
              </Typography>

              <ArrowForwardIcon className={classnames([classes.contrastText, classes.boldText])} />
            </Link>
          </Button>

      </Container>
    </>
  );
}

export default MainPage;
