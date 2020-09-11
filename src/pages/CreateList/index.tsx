import React, { useEffect } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { DEFAULT_TASK } from 'types';

import Container from '@material-ui/core/Container';
import { Typography, Button, CircularProgress, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

import Tasks from 'components/Tasks';

import { database, databaseDoc } from 'firebaseConfig';
import createTypography from '@material-ui/core/styles/createTypography';

const MAXIMUM_TASKS = 8

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      color: theme.palette.text.secondary,
      textAlign: 'center',
      position: 'relative',
      margin: '100px auto',
    },
    heading: {
      textAlign: 'right',
      marginBottom: '50px',
    },
    buttonWrapper: {
      textAlign: 'left',
      position: 'relative',
    },
    saveButton: {
      background: theme.palette.background.paper,
      fontSize: '20px',
      height: '47px',
      width: '100px',
      position: 'absolute',
      right: 0,
      '&:hover': {
        background: theme.palette.background.paper,
      },
    },
    addButton: {
      fontSize: '30px',
      fontWeight: 700,
      borderRadius: '100%',
      '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  }),
)

interface PageProps {
  history: {
    push: (newPath: string) => void,
  },
  location: {
    hash: string,
  }
}

const CreateList: React.FC<PageProps> = (props) => {
  const classes = useStyles()
  const [tasks, setTasks] = React.useState([DEFAULT_TASK])
  const [loading, setLoading] = React.useState(false)
  const [changed, setChanged] = React.useState(false)
  const [listId] = React.useState(props.location?.hash?.slice(1))

  const changeTask = (index: number, text?: string) => {
    setLoading(false)
    const currentTasks = [...tasks]
    const currentTask = currentTasks[index]

    const selectedTask = text
      ? { text, checked: currentTask.checked }
      : { text: currentTask.text, checked: !currentTask.checked }

    currentTasks.splice(index, 1, selectedTask)

    setTasks(currentTasks)
    setChanged(true)
  }

  useEffect(() => {
    if (listId) {
      setChanged(true);

      databaseDoc(listId).get()
        .then((doc: any) => {
          const data = doc.data()
          setTasks(data.tasks)
        })
    }
  }, [props.history, listId, setTasks])

  const saveList = () => {
    setLoading(true);

    (!listId.length
      ? (database as any).add({
        password: 'asd',
        tasks,
      })
      : databaseDoc(listId).set({
        password: 'asd',
        tasks,
      }))
      .then((result: any) => {
        props.history.push(`/list/create#${result.id}`)
        setLoading(false)
      })
      .catch((error: any) => {
        setLoading(false)
        console.log('Error catched!', error)
      });
  }

  const addTask = () => {
    setChanged(true)
    tasks.length < MAXIMUM_TASKS && setTasks(tasks.concat(DEFAULT_TASK))
  }

  return (
    <Container className={classes.content}>

      <Typography variant="h2" className={classes.heading}>
        {changed ? 'List' : 'New list'}
      </Typography>

      {listId && (
        <Typography variant="subtitle1">
          <b>{'id: '}</b>
          {listId}
        </Typography>
      )}

      <Tasks tasks={tasks} completeTask={changeTask} saveText={changeTask} />

      <Container className={classes.buttonWrapper}>
        {tasks.length < MAXIMUM_TASKS && !loading && (
          <Fab color="primary" aria-label="add" className={classes.addButton} onClick={addTask}>
            <AddIcon />
          </Fab>
        )}

        {changed && (
          <Button onClick={saveList} className={classes.saveButton}>
            {loading ? <CircularProgress size={30} /> : 'Save'}
          </Button>
        )}
      </Container>
    </Container>
  )
}

export default CreateList