import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, Link, Grid, Button } from '@material-ui/core';

import BottomBar from 'components/BottomBar';
import InfoBlocks from 'components/InfoBlocks';

const useStyles = makeStyles({
  infoBlock: {
    marginTop: '100px',
  },
  container: {
    padding: '100px 0',
  },
  title: {
    fontWeight: 600,
    color: '#FFFFFF',
  },
  subtitle: {
    fontWeight: 500,
    color: '#FFFFFF',
  },
  link: {
    color: '#FFFFFF',
    borderBottom: '1px solid #FFFFFF',
  },
  paper: {
    background: '#413B4D',
    padding: '20px',
  },
  cta: {
    marginTop: '50px',
  },
  button: {
    color: '#FFFFFF',
    background: '#887d9e'
  },
});

const MainPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        {'Welcome to Hilfsbereit'}
      </Typography>

      <Typography variant="h4" className={classes.subtitle}>
        {'The place when you can find a person to help'}
      </Typography>

      <InfoBlocks />

      <Grid container justify="center" className={classes.cta} spacing={3}>
        <Grid item>
          <Button className={classes.button}>
            You are specialist
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.button}>
            You need a hand
          </Button>
        </Grid>
      </Grid>
      
      <BottomBar
        tools={
          <Typography className={classes.subtitle}>
            {'Created by '}
            <Link
              href="https://github.com/pulko"
              target="-blank"
              className={classes.link}
            >
              {'Pulko'}
            </Link>
          </Typography>
        }
      />

    </Container>
  );
}

export default MainPage;
