import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { DEFAULT_TASK } from 'types';

import Container from '@material-ui/core/Container';
import { Typography, Button } from '@material-ui/core';
import Tasks from 'components/Tasks';

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
    button: {
      background: theme.palette.background.paper,
      fontSize: '20px',
      '&:hover': {
        background: theme.palette.background.paper,
      },
    },
  }),
)

const CreateList: React.FC = () => {
  const classes = useStyles()
  const [tasks, setTasks] = React.useState([DEFAULT_TASK])

  const changeTask = (index: number, text?: string) => {
    const currentTasks = [...tasks]
    const currentTask = currentTasks[index]

    const selectedTask = text
      ? { text, checked: currentTask.checked }
      : { text: currentTask.text, checked: !currentTask.checked }
    
    currentTasks.splice(index, 1, selectedTask)

    setTasks(currentTasks)
  } 

  const addTask = () => tasks.length < MAXIMUM_TASKS && setTasks(tasks.concat(DEFAULT_TASK))

  return (
    <Container className={classes.content}>
      <Typography variant="h2" className={classes.heading}>
        {'Create your list'}
      </Typography>

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