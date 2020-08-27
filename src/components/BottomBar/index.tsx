import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

interface BottomBarProps {
  children?: ReactElement,
  tools?: ReactElement,
}

const useStyles = makeStyles(() => ({
  bar: {
    bottom: 0,
    top: 'auto',
    textAlign: 'right',
    padding: '0 30px',
    background: '#413B4D',
    boxShadow: 'none',
  }
}));

const BottomBar: React.FC<BottomBarProps> = (props) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" color="primary" className={classes.bar}>
      <Toolbar>
        {props.tools}
      </Toolbar>
      {props.children}
    </AppBar>
  )
}

export default BottomBar;