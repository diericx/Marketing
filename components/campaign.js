import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withHandlers } from 'recompose';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SnapchatCampaignForm from './campaignForms/snapchat';

const styles = theme => ({
  root: {
    padding: 50,
    flexGrow: 1
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  nameTextField: {
    fontSize: 40
  }
});

function Campaign(props) {
  const { classes, campaign, updateCampaign } = props;

  // Helper function that is used as a callback to fields that
  // should udpate a value in a campaign
  const updateCampaignFromFieldChange = name => event => {
    updateCampaign({
      [name]: event.target.value
    });
  };

  // If the campaign isn't loaded yet, show loading
  if (!isLoaded(campaign)) {
    return <CircularProgress className={classes.progress} />;
  }

  // Display campaign
  return (
    <div className={classes.root}>
      <Typography variant="h4">
        <TextField
          id="standard-name"
          label="Campaign Name"
          // className={classes.nameTextField}
          value={campaign.name}
          onChange={updateCampaignFromFieldChange('name')}
          InputProps={{
            classes: {
              input: classes.nameTextField
            }
          }}
          inputProps={{ maxLength: 34 }}
          margin="normal"
        />
      </Typography>

      <SnapchatCampaignForm {...{ campaign, updateCampaign, updateCampaignFromFieldChange }} />
    </div>
  );
}

Campaign.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withRouter,
  firestoreConnect(props => [{ collection: 'campaigns', doc: props.router.query.id }]),
  connect(({ firestore: { data } }, props) => ({
    campaign: data.campaigns && data.campaigns[props.router.query.id]
  })),
  withHandlers({
    updateCampaign: props => updates =>
      props.firestore.update({ collection: 'campaigns', doc: props.router.query.id }, updates)
  })
)(Campaign);
