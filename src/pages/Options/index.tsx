import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles, Theme, Button } from '@material-ui/core';

import theme from 'theme/theme';


const useStyles = makeStyles((theme: Theme) => ({
  content: {
    marginTop: '200px',
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
  buttons: {
    marginTop: '100px',
  }
}))

const Options: React.FC = () => {
  const classes = useStyles(theme)

  return (
    <Container className={classes.content}>
      <Typography variant="h2">
        {'Start new list or get an access'}
      </Typography>

      <div className={classes.buttons}>
        <Button href="list/create">Create</Button>
        <Button>Use Existing</Button>
      </div>
    </Container>
  );
}

export default Options;
