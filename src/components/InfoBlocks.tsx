import React from 'react';

import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CallIcon from '@material-ui/icons/Call';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  infoBlock: {
    marginTop: '100px',
  },
  paper: {
    background: '#413B4D',
    padding: '20px',
  },
  row: {
    padding: '20px 0',
  },
  content: {
    color: '#FFFFFF',
    paddingBottom: '20px',
  },
})

const InfoBlocks: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.infoBlock}>
      <Grid
        container
        spacing={3}
        className={classes.row}
        direction="row"
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <ApartmentIcon className={classes.content} />
            <Typography variant="h5" className={classes.content}>
              Use our app from anywhere you want
            </Typography>
            <Typography variant="subtitle2" className={classes.content}>
              Easily accesible from any devices. List of local professionals is sorted and verified.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>
            <AssignmentIndIcon className={classes.content} />
            <Typography variant="h5" className={classes.content}>
              Choose a professional that fits your request
            </Typography>
            <Typography variant="subtitle2" className={classes.content}>
              Every specialist has his own descriptions, skills and pricing.
            </Typography>
          </Paper>
        </Grid>
      </Grid >

      <Grid
        container
        spacing={3}
        className={classes.row}
        direction="row"
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <CallIcon className={classes.content} />
            <Typography variant="h5" className={classes.content}>
              Connect by phone
            </Typography>
            <Typography variant="subtitle2" className={classes.content}>
              Every specialist has telephone number, so you can easily connect with them using our app.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>
            <CheckIcon className={classes.content} />
            <Typography variant="h5" className={classes.content}>
              Make it fast
            </Typography>
            <Typography variant="subtitle2" className={classes.content}>
              Simple request system allows you satisfying your needs fast and easy.
            </Typography>
          </Paper>
        </Grid>
      </Grid >
    </div>
  )
}

export default InfoBlocks