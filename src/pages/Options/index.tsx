import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { red } from '@material-ui/core/colors';

import { makeStyles, Theme, Button, Paper, Input } from '@material-ui/core';

import theme from 'theme/theme';
import { PageProps } from 'types';
import { databaseDoc } from 'firebaseConfig';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
    margin: '200px auto 100px auto',
  },
  buttons: {
    marginTop: '100px',
  },
  inputPaper: {
    maxWidth: '200px',
    margin: '50px auto',
    padding: '10px',
  },
  error: {
    color: red[900],
  },
}))

const Options: React.FC<PageProps> = (props) => {
  const classes = useStyles(theme)
  const [existing, setExisting] = React.useState(false)
  const [input, setInput] = React.useState('')
  const [error, setError] = React.useState(false)

  const goToList = () => {
    databaseDoc(input).get()
      .then(doc => {
        const data = doc.data()

        if (!data) {
          setError(true)
        } else {
          props.history.push(`/list/create#${input}`)
        }
      })
      .catch(() => {
        setError(true)
      })
  }

  return (
    <Container className={classes.content}>
      <Typography variant="h2">
        {'Start new list or get an access'}
      </Typography>

      <div className={classes.buttons}>
        <Button href="list/create">{'Create'}</Button>
        <Button onClick={() => setExisting(!existing)}>{'Use Existing'}</Button>
      </div>

      {existing && (
        <Paper className={classes.inputPaper}>
          <Input
            type="standard"
            autoFocus
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setInput(event?.target.value)}
            onFocus={() => setError(false)}
            value={input}
          />

          {error && (
            <Typography className={classes.error}>
              {'Error'}
            </Typography>
          )}

          <Button onClick={goToList}>
            {'Go'}
          </Button>
        </Paper>
      )}
    </Container>
  );
}

export default Options;
