import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  tableRow: {
    '&:hover': {
      backgroundColor: 'lightgray !important',
      cursor: 'pointer'
    }
  }
});

function CampaignOnClick(campaignId) {
  Router.push(`/campaign?id=${campaignId}`, `campaign/${campaignId}`);
}

function Campaigns(props) {
  const { classes, data } = props;

  if (data.length === 0) {
    return <p>You have no campaigns!</p>;
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Campaign Name</TableCell>
            <TableCell numeric>Platform</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow
              key={row.id}
              className={classes.tableRow}
              onClick={() => CampaignOnClick(row.id)}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell numeric>{row.platform}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Campaigns.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Campaigns);
