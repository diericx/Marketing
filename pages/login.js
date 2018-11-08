import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

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

  login() {
    console.log("LOGGIN GIN", this.state)
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

        <Button variant="outlined" color="primary" className={classes.submitButton} onClick={() => this.login()}>
          Login
        </Button>

      </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect(['chocolates']),
  connect(({ firestore: { ordered } }, props) => ({
    chocolates: ordered.chocolates
  })),
  withStyles(styles),
  withHeader
)(Login)