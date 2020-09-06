import React from 'react';

import { Task } from 'types';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

interface TasksProps {
  completeTask: (event: any) => any,
  tasks: Array<Task>,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const Tasks: React.FC<TasksProps> = (props) => {
  const {
    completeTask,
    tasks,
  } = props

  const classes = useStyles()

  return (
    <List className={classes.root}>
      {tasks.map((task, index) => {
        return (
          <ListItem key={index}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.checked}
                tabIndex={-1}
                disableRipple
                onClick={() => completeTask(index)}
                inputProps={{ 'aria-labelledby': `task-item-${index}` }}
              />
            </ListItemIcon>

            <ListItemText id={index.toString()} primary={task.text} />

            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  )
}

export default Tasks