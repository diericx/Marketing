import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';

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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Paper } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

import ExpansionForm from '../expansionForm';
import RadioPicker from '../radioPicker';
import LocationPicker from '../locationPicker';
import Setup from './setup';
import withHeader from '../../../lib/withHeader';

const styles = theme => ({
  root: {
    padding: 50,
    flexGrow: 1
  },
  nameTextField: {
    fontSize: 50
  },
  submitButton: {
    width: '200px'
  }
});

/**
 * This is the Snapchat Campaign Form. This file is the index and
 * implements all the ui for the form, but leaves functionality to
 * the parent.
 */
class Snapchat extends React.Component {
  state = {
    locations: []
  };

  updateCampaignFromFieldChange = name => event => {
    const { updateCampaign } = this.props;
    updateCampaign({
      [name]: event.target.value
    });
  };

  deleteLocation = index => {
    const { locations } = this.state;
    locations.splice(index, 1);
    this.setState({ locations });
  };

  addLocation = loc => {
    this.setState(prevState => ({
      locations: [...prevState.locations, loc]
    }));
  };

  render() {
    const { classes, campaign, updateCampaign } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction="column" spacing={16}>
          <Typography variant="h4">
            <TextField
              id="standard-name"
              label="Campaign Name"
              // className={classes.nameTextField}
              value={campaign.name}
              onChange={this.updateCampaignFromFieldChange('name')}
              InputProps={{
                classes: {
                  input: classes.nameTextField
                }
              }}
              inputProps={{ maxLength: 34 }}
              margin="normal"
            />
          </Typography>

          <ExpansionForm>
            {/* TODO - Move this to an indipendent component */}
            <Setup
              {...{
                campaign,
                updateCampaign,
                updateCampaignFromFieldChange: this.updateCampaignFromFieldChange
              }}
            />
          </ExpansionForm>
        </Grid>
      </div>
    );
  }
}

Snapchat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Snapchat);
