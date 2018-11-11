import React from 'react'
import PropTypes from 'prop-types';
import Router from 'next/router';
import {connect} from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty, withFirebase } from 'react-redux-firebase'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import withHeader from '../lib/withHeader'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200px',
  },
  submitButton: {
    width: '200px'
  }
})

class Login extends React.Component {

  state = {
    email: null,
    password: null
  }

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        Here's your dashboard!
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withFirebase,
  connect(({ firestore: { ordered } }, props) => ({
    chocolates: ordered.chocolates
  })),
  withStyles(styles),
  withHeader
)(Login)
