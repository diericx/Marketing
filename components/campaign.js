import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'next/router'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { compose } from 'redux';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
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
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withRouter,
)(Campaign);