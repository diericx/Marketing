import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ExpansionForm from '../expansionForm';
import Setup from './setup';
import Demographics from './demographics';
import Audience from './audience';
import Platforms from './platforms';

const styles = theme => ({
  root: {
    padding: 50,
    flexGrow: 1
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
    const { classes, campaign, updateCampaign, updateCampaignFromFieldChange } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction="column" spacing={16}>
          <ExpansionForm
            passdownProps={{
              title: 'Platforms',
              campaign,
              updateCampaign,
              updateCampaignFromFieldChange
            }}
          >
            <Platforms title="1. Platforms" />
            <Setup title="2. Setup" />
            <Demographics title="3. Demographics" />
            <Audience title="4. Audience" />
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
