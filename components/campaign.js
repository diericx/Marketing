import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withHandlers } from 'recompose';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnapchatCampaignForm from './campaignForm/snapchatCampaignForm';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

function Campaign(props) {
  const { classes, campaign, updateCampaign } = props;

  if (!isLoaded(campaign)) {
    return <CircularProgress className={classes.progress} />;
  }

  // Render correct form for campaign
  if (campaign.platform === 'Snapchat') {
    return <SnapchatCampaignForm {...{ campaign, updateCampaign }} />;
  }
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
