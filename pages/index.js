import React from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import withHeader from '../lib/withHeader'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'black',
    height: 300
  },
  snapchat: {
    backgroundColor: '#FFFC00'
  },
});

class Index extends React.Component {

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Grid container spacing={16}>
      
        <Grid item className={classes.demo} justify="center" xs={4}>
          
        </Grid>

      </Grid>
      </div>
    )
  }
}

export default compose(
  firestoreConnect(['chocolates']),
  connect(({ firestore: { ordered } }, props) => ({
    chocolates: ordered.chocolates
  })),
  withStyles(styles),
  withHeader
)(Index)
