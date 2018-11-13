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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import GoalPicker from '../../components/campaignForm/goalPicker';
import withHeader from '../../lib/withHeader'

const styles = theme => ({
  root: {
    padding: 50,
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

class Snapchat extends React.Component {

  state={};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render () {
    const { classes, value, handleChange } = this.props;
    const { goal } = this.state;

    return (
      <div className={classes.root}>
        <Grid container direction="column" spacing={16}>
          <Grid item xs={12}>
            <GoalPicker value={goal} handleChange={this.handleChange('goal')} />
        
          </Grid>
          
        </Grid>
      </div>
    )
  }
}

Snapchat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withHeader
)(Snapchat)
