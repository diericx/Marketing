import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RadioPicker from '../radioPicker';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  multilineTextField: {
    width: 300
  }
});

class Audience extends React.Component {
  state = {};

  // ExpansionForm compliance
  // Set completion status initially
  constructor(props) {
    super(props);
    const { updateCompletionStatus } = props;
    updateCompletionStatus(this.isComplete());
  }

  // ExpansionForm compliance
  // call UpdateCompletionStatus any time props change
  componentDidUpdate() {
    const { updateCompletionStatus } = this.props;
    updateCompletionStatus(this.isComplete());
  }

  isComplete() {
    const { campaign } = this.props;
    return !campaign.demographic || campaign.demographic === '';
  }

  render() {
    const { classes, campaign, updateCampaignFromFieldChange } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row" spacing={16}>
          <Grid item xs={12}>
            <TextField
              id="standard-multiline-flexible"
              label="Describe Your Demographic"
              multiline
              rowsMax="4"
              value={campaign.demographic}
              onChange={updateCampaignFromFieldChange('demographic')}
              className={classes.multilineTextField}
              margin="normal"
            />
          </Grid>
        </Grid>

        {/* TODO - Languages and Advanced Demographics section */}
      </div>
    );
  }
}

Audience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Audience);
