import React from 'react';

import { Task } from 'types';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import TaskItem from './TaskItem';

interface TasksProps {
  completeTask: (event: any) => any,
  saveText: (index: number, text: string) => void,
  tasks: Array<Task>,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      
    },
    item: {
      margin: '5px 0',
      padding: '20px 40px',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '4px',
    },
  }),
);

const Tasks: React.FC<TasksProps> = (props) => {
  const {
    completeTask,
    saveText,
    tasks,
  } = props

  const classes = useStyles()

  return (
    <List className={classes.root}>
      {tasks.map((task, index) => (
        <ListItem key={index} className={classes.item}>
          <TaskItem
            index={index}
            completeTask={completeTask}
            task={task}
            saveText={saveText}
          />
        </ListItem>
        )
      )}
    </List>
  )
}

export default Tasks