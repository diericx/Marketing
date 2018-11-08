import React from 'react'
import PropTypes from 'prop-types';
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

class SignUp extends React.Component {
  signup() {
    const {firebase} = this.props
    const {name, email, password} = this.state
    firebase.createUser({email, password, signIn: true}, {name})
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Grid container direction="column" align="center" spacing={16}>

        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <TextField
          id="standard-name"
          label="Email"
          className={classes.textField}
          onChange={this.handleChange('email')}
          margin="normal"
        />

        <TextField
          id="standard-name"
          label="Password"
          className={classes.textField}
          onChange={this.handleChange('password')}
          margin="normal"
          type="password"
        />

        <Button variant="outlined" color="primary" className={classes.submitButton} onClick={() => this.signup()}>
          Sign Up
        </Button>

      </Grid>
      </div>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect(['chocolates']),
  withFirebase,
  withStyles(styles),
  withHeader
)(SignUp)
