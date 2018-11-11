import React from 'react'
import PropTypes from 'prop-types';
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
  },
  title:{
    color: '#111111'
  },
})

class SignUp extends React.Component {
  state = {}
  
  signup = () => {
    if (!this.validateData()) {
      // TODO - set an error
      return;
    }

    const {firebase} = this.props
    const {
      businessName, businessStreetAddress, businessCity, businessState, businessAreaCode, businessType, 
      email, password
    } = this.state

    firebase.createUser(
      {email, password}, 
      {
        businessName, 
        businessStreetAddress, 
        businessCity, 
        businessState, 
        businessAreaCode, 
        businessType
      }
    )
  }

  validateData = () => {
    const {
      businessName, businessStreetAddress, businessCity, businessState, businessAreaCode, businessType, 
      email, password
    } = this.state;

    if (!businessName || !businessStreetAddress || !businessCity || !businessState || !businessAreaCode || !businessType ||
      !email || !password) {
        return false
      }

      return true;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  // type of business
  // name of business
  

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Grid container direction="row" align="center" spacing={16}>


        {/* BUSINESS INFO */}
        <Grid item align="center" xs={12}>
          <Typography className={classes.title} variant="h5"> TELL US ABOUT YOUR BUSINESS </Typography>
          <Grid item align="center" xs={6}>
            <hr/>
          </Grid>
        </Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
          <Grid item align="center" xs={12} sm={6} md={4}>
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              onChange={this.handleChange('businessName')}
              margin="normal"
            />
          </Grid>
        <Grid item align="center" xs={12} sm={3} md={4}></Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
          <Grid item align="center" xs={12} sm={6} md={4}>
            <TextField
              id="standard-name"
              label="Street Address"
              className={classes.textField}
              onChange={this.handleChange('businessStreetAddress')}
              margin="normal"
            />
          </Grid>
        <Grid item align="center" xs={12} sm={3} md={4}></Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
          <Grid item align="center" xs={12} sm={6} md={4}>
            <TextField
              id="standard-name"
              label="City"
              className={classes.textField}
              onChange={this.handleChange('businessCity')}
              margin="normal"
            />
          </Grid>
        <Grid item align="center" xs={12} sm={3} md={4}></Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
          <Grid item align="center" xs={12} sm={6} md={4}>
            <TextField
              id="standard-name"
              label="State"
              className={classes.textField}
              onChange={this.handleChange('businessState')}
              margin="normal"
            />
          </Grid>
        <Grid item align="center" xs={12} sm={3} md={4}></Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
          <Grid item align="center" xs={12} sm={6} md={4}>
            <TextField
              id="standard-name"
              label="Area Code"
              className={classes.textField}
              onChange={this.handleChange('businessAreaCode')}
              margin="normal"
            />
          </Grid>
        <Grid item align="center" xs={12} sm={3} md={4}></Grid>

        <Grid item align="center" xs={12} sm={3} md={4}></Grid>
          <Grid item align="center" xs={12} sm={6} md={4}>
            <TextField
              id="standard-name"
              label="Type"
              className={classes.textField}
              onChange={this.handleChange('businessType')}
              margin="normal"
            />
          </Grid>
        <Grid item align="center" xs={12} sm={3} md={4}></Grid>

        {/* USER INFO */}
        <Grid item align="center" xs={12}>
          <Typography className={classes.title} variant="h5"> CREATE YOUR ACCOUNT </Typography>
          <Grid item align="center" xs={6}>
            <hr/>
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
          <Grid item align="center" xs={12} sm={6} md={4}>
            <Button variant="outlined" color="primary" className={classes.submitButton} onClick={this.signup}>
              Sign Up
            </Button>
          </Grid>
        

      </Grid>
      </div>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withFirebase,
  withStyles(styles),
  withHeader
)(SignUp)
