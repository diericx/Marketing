import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  summary: {
    backgroundColor: 'red'
  },
  details: {
    backgroundColor: 'white'
  },
  red: {
    color: '#ee5253'
  },
  green: {
    color: '#1dd1a1'
  },
  redGradient: {
    background: 'linear-gradient(to right, #ee5253, white)'
  },
  greenGradient: {
    background: 'linear-gradient(to right, #1dd1a1, white)'
  },
  secondaryHeading: {
    width: '100%',
    textAlign: 'right',
    color: theme.palette.text.secondary
  }
});

/**
 * ExpansionForm each of it's children in an ExpansionPanel. It also
 * acts as a form that collects whether or not each of it's children
 * (which are forms themselves) are completed and updates accordingly
 */
class ExpansionForm extends React.Component {
  state = {
    completionStatus: {}
  };

  /**
   * Updates the state with the given the index and completion
   * status of a child
   * @param {number} index
   * @param {string} value
   */
  updateCompletionStatus = index => status => {
    // Don't update state if the incomming status is the same
    if (this.state.completionStatus[index] === status) {
      console.log(status, '==', this.state.completionStatus[index]);
      return;
    }
    // If the incomming status is differemt, update
    const { state } = this;
    state.completionStatus[index] = status;
    this.setState(state);
    console.log(this.state);
  };

  render() {
    const { children, classes } = this.props;
    const { completionStatus } = this.state;

    const expansionPanels = React.Children.map(children, (child, index) => (
      <ExpansionPanel
        key={index}
        className={completionStatus[index] ? classes.greenGradient : classes.redGradient}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} root={classes.summary}>
          <Typography className={classes.heading}>Setup</Typography>
          <Typography className={classes.secondaryHeading}>
            {completionStatus[index] ? (
              <CheckCircleOutline className={classes.green} />
            ) : (
              <ErrorOutline className={classes.red} />
            )}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          {React.cloneElement(child, {
            updateCompletionStatus: this.updateCompletionStatus(index)
          })}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));

    return <div>{expansionPanels}</div>;
  }
}

ExpansionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExpansionForm);
