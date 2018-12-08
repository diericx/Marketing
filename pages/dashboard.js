import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Campaigns from '../components/campaigns';
import NewCampaignButtons from '../components/newCampaignButtons';
import withHeader from '../lib/withHeader';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200px'
  },
  submitButton: {
    width: '200px'
  }
});

class Login extends React.Component {
  state = {
    email: null,
    password: null
  };

  render() {
    const { classes, campaigns } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h5">New Campaign</Typography>
        <br />
        <NewCampaignButtons />
        <br />

        <Typography variant="h5">My Campaigns</Typography>
        {isLoaded(campaigns) ? <Campaigns data={campaigns} /> : null}
        <br />
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(({ firestore: { ordered }, firebase: { auth } }, props) => ({
    campaigns: ordered.campaigns,
    auth
  })),
  firestoreConnect(({ auth }) => [
    { collection: 'campaigns', owner: auth.uid } // or `todos/${props.todoId}`
  ]),
  withStyles(styles),
  withHeader
)(Login);
