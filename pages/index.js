import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import withHeader from '../lib/withHeader';

const styles = theme => ({
  root: {
    paddingTop: 50,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'black',
    height: 300
  },
  titleItem: {
    textAlign: 'center'
  },
  title: {
    lineHeight: '90px',
    color: '#55555'
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item className={classes.titleItem} xs={12}>
            <Typography variant="h3" className={classes.title}>
              Stop Being Invisible.
              <br />
              Stop advertising.
              <br />
              Start innovating.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withHeader
)(Index);
