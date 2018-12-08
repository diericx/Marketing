import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import ExpansionForm from '../expansionForm';
import Setup from './setup';
import Demographics from './demographics';
import Audience from './audience';

const styles = theme => ({
  root: {
    padding: 50,
    flexGrow: 1
  },
  nameTextField: {
    fontSize: 40
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
                title: 'Setup',
                campaign,
                updateCampaign,
                updateCampaignFromFieldChange: this.updateCampaignFromFieldChange
              }}
            />
            <Demographics
              {...{
                title: 'Demographics',
                campaign,
                updateCampaign,
                updateCampaignFromFieldChange: this.updateCampaignFromFieldChange
              }}
            />
            <Audience
              {...{
                title: 'Demographics',
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
