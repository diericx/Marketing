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
import Typography from '@material-ui/core/Typography';

import withHeader from '../lib/withHeader'

const styles = theme => ({
  root: {
    paddingTop: 50,
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
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

  login = async () => {
    const { firebase } = this.props;
    const { email, password } = this.state;

    try {
      // Attempt to login
      const result = await firebase.login({
        email, 
        password
      })

      // Succesful login
      Router.push('/');
      
    } catch (error) {
      console.log('ERROR with signing: ', error)
    }
    
    
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
      <Grid container direction="row" align="center" spacing={16}>

        <Grid item align="center" xs={12}>
          <Typography className={classes.title} variant="h5"> LOGIN </Typography>
          <Grid item align="center" xs={6}>
            <hr />
          </Grid>
        </Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
          <Grid item align="center" xs={12} sm={6} md={4}>
            <TextField
              id="standard-name"
              label="Email"
              className={classes.textField}
              onChange={this.handleChange('email')}
              margin="normal"
            />
          </Grid>
        <Grid item align="center" xs={12} sm={3} md={4}></Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
          <Grid item align="center" xs={12} sm={6} md={4}>
            <TextField
              id="standard-name"
              label="Password"
              className={classes.textField}
              onChange={this.handleChange('password')}
              margin="normal"
              type="password"
            />
          </Grid>
        <Grid item align="center" xs={12} sm={3} md={4}></Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
        <Grid item align="center" xs={0} sm={3} md={4}>
          <Button variant="outlined" color="primary" className={classes.submitButton} onClick={() => this.login()}>
            Login
          </Button>
        </Grid>
        

      </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withFirebase,
  withStyles(styles),
  withHeader
)(Login)
