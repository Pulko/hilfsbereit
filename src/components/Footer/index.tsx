import React from 'react';
import { makeStyles } from '@material-ui/core';

interface FooterProps {

}

const useStyles = makeStyles(() => ({
  footer: {
    bottom: 0,
    top: 'auto',
    textAlign: 'center',
    background: '#77bdf2',
    boxShadow: 'none',
  }
}));

const Footer: React.FC<FooterProps> = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      footer
    </div>
  )
}

export default Footer