import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  }
});

function Campaign(props) {
  const { classes, router } = props;

  return (
    <div className={classes.root}>
      CAMPAIGN:
      <h1>{router.query.id}</h1>
    </div>
  );
}

Campaign.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withRouter
)(Campaign);
