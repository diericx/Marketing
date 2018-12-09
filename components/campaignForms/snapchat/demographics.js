import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RadioPicker from '../radioPicker';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

const genderOptions = [{ title: 'All' }, { title: 'Male' }, { title: 'Female' }];

class Demographics extends React.Component {
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

    if (
      !campaign.ageMin ||
      campaign.ageMin === '0' ||
      !campaign.ageMax ||
      campaign.ageMax === '0' ||
      !campaign.gender
    ) {
      return false;
    }

    return true;
  }

  render() {
    const { classes, campaign, updateCampaignFromFieldChange } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <TextField
              id="standard-number"
              label="Age Minimum"
              value={campaign.ageMin}
              onChange={updateCampaignFromFieldChange('ageMin')}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
            <TextField
              id="standard-number"
              label="Age Maximum"
              value={campaign.ageMax}
              onChange={updateCampaignFromFieldChange('ageMax')}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </Grid>
        </Grid>
        <RadioPicker
          label="Gender"
          options={genderOptions}
          value={campaign.gender}
          handleChange={updateCampaignFromFieldChange('gender')}
        />
        <Grid container spacing={16} />

        {/* TODO - Languages and Advanced Demographics section */}
      </div>
    );
  }
}

Demographics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Demographics);
