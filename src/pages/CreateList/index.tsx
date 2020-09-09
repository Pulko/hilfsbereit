import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { DEFAULT_TASK } from 'types';

import Container from '@material-ui/core/Container';
import { Typography, Button, CircularProgress } from '@material-ui/core';

import Tasks from 'components/Tasks';

import database from 'firebaseConfig';

const MAXIMUM_TASKS = 8

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: '100px',
      color: theme.palette.text.secondary,
      textAlign: 'center',
    },
    heading: {
      textAlign: 'right',
      marginBottom: '50px',
    },
    buttonWrapper: {
      textAlign: 'right',
      height: '122px',
    },
    saveButton: {
      background: theme.palette.background.paper,
      fontSize: '20px',
      height: '47px',
      width: '100px',
      marginTop: '20px',
      '&:hover': {
        background: theme.palette.background.paper,
      },
    },
    button: {
      fontSize: '30px',
      fontWeight: 700,
      borderRadius: '100%',
      '&:hover': {
        background: 'transparent',
      },
    },
  }),
)

interface PageProps {
  history: {
    push: (newPath: string) => void,
  },
}

const CreateList: React.FC<PageProps> = (props) => {
  debugger
  const classes = useStyles()
  const [tasks, setTasks] = React.useState([DEFAULT_TASK])
  const [loading, setLoading] = React.useState(false)
  const [changed, setChanged] = React.useState(false)

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

  const saveList = () => {
    setLoading(true);

    (database as any).collection('lists').add({
      password: 'asd',
      tasks,
    })
      .then((result: any) => {
        props.history.push(`/list/create/${result.id}`)
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
      {changed
        ? (
          <div className={classes.buttonWrapper}>
            <Button onClick={saveList} className={classes.saveButton}>
              {loading ? <CircularProgress size={30} /> : 'Save'}
            </Button>
          </div>
        ) : (
          <Typography variant="h2" className={classes.heading}>
            {'New List'}
          </Typography>
        )
      }

      <Tasks tasks={tasks} completeTask={changeTask} saveText={changeTask} />
      
      {tasks.length < MAXIMUM_TASKS && (
        <Button onClick={addTask} className={classes.button}>
          {'+'}
        </Button>
      )}
    </Container>
  )
}

export default CreateList