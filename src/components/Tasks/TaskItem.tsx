import React from 'react';

import { Task, DEFAULT_TASK_TEXT } from 'types';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { TextField, Theme, createStyles, makeStyles } from '@material-ui/core';

interface TaskItemProps {
  completeTask: (event: any) => any,
  saveText: (index: number, text: string) => void,
  task: Task,
  index: number,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: '60%',
    },
  }),
)

const TaskItem = (props: TaskItemProps) => {
  const {
    saveText,
    completeTask,
    task: {
      checked,
      text,
    },
    index,
  } = props

  const [selected, setSelected] = React.useState(false)
  const [input, setInput] = React.useState(text)
  const classes = useStyles()

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const onBlur = (index: number, text: string) => {
    setSelected(false)
    saveText(index, text)
  }

  return (
    <>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          onClick={() => completeTask(index)}
          inputProps={{ 'aria-labelledby': `task-item-${index}` }}
        />
      </ListItemIcon>

      {selected
        ? (
          <TextField
            onBlur={() => onBlur(index, input)}
            onChange={onTextChange}
            value={input || text}
            autoFocus
            className={classes.input}
          />
        )
        : <ListItemText id={index.toString()} primary={text || DEFAULT_TASK_TEXT} />
      }

      <ListItemSecondaryAction>
        <IconButton aria-label="comments" onClick={() => setSelected(!selected)}>
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  )
}

export default TaskItem