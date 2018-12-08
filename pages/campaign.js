import React from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty, withFirebase } from 'react-redux-firebase'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import withHeader from '../lib/withHeader'
import Campaign from '../components/campaign'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Index extends React.Component {

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Campaign />
      </div>
    )
  }
}

export default compose(
  withStyles(styles),
  withHeader
)(Index)
