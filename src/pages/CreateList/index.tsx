import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { DEFAULT_TASK } from 'types';

import Container from '@material-ui/core/Container';
import { Typography, Button } from '@material-ui/core';
import Tasks from 'components/Tasks';


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
      marginTop: '20px',
      '&:hover': {
        background: theme.palette.background.paper,
      },
    },
  }),
);

const CreateList: React.FC = () => {
  const classes = useStyles()
  const [tasks, setTasks] = React.useState([DEFAULT_TASK])

  const completeTask = (index: number) => {
    const currentTasks = [...tasks]

    const selectedTask = { text: currentTasks[index].text, checked: !currentTasks[index].checked }

    currentTasks.splice(index, 1, selectedTask)

    setTasks(currentTasks)
  };

  const addTask = () => setTasks(tasks.concat(DEFAULT_TASK))

  return (
    <Container className={classes.content}>
      <Typography variant="h2" className={classes.heading}>
        {'Create your list'}
      </Typography>

      <Tasks tasks={tasks} completeTask={completeTask} />
      
      <Button onClick={addTask} className={classes.button}>
        {'+'}
      </Button>
    </Container>
  )
}

export default CreateList