import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import RadioPicker from '../radioPicker';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

/**
 * Setup form for Snapchat. To be used in an ExpansionForm, meaning
 * the function
 */
class Setup extends React.Component {
  state = {};

  goalOptions = [
    {
      title: 'Awareness'
    },
    {
      title: 'Drive Traffic to Website'
    },
    {
      title: 'Website Conversions',
      disabled: true
    },
    {
      title: 'Catalog Sales',
      disabled: true
    },
    {
      title: 'App Installs',
      disabled: true
    },
    {
      title: 'Drive Traffic to App',
      disabled: true
    },
    {
      title: 'Engagement',
      disabled: true
    },
    {
      title: 'Video Views',
      disabled: true
    },
    {
      title: 'Lead Gen',
      disabled: true
    }
  ];

  adTypeOptions = [
    { title: 'Image' },
    { title: 'Image Collection', disabled: true },
    { title: 'Filter', disabled: true }
  ];

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

  /**
   * Check to see if this form section is complete
   */
  isComplete() {
    const { campaign } = this.props;
    const { headline, dailySpendCap, lifetimeSpendCap, goal, adType } = campaign;
    console.log(headline);
    if (
      !headline ||
      headline === '' ||
      !dailySpendCap ||
      dailySpendCap === '0' ||
      !lifetimeSpendCap ||
      lifetimeSpendCap === '0' ||
      !goal ||
      goal === '' ||
      !adType ||
      adType === ''
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { classes, campaign, updateCampaignFromFieldChange } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <TextField
            id="outlined-name"
            label="Headline"
            value={campaign.headline}
            onChange={updateCampaignFromFieldChange('headline')}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-number"
            label="Daily Spend Cap"
            value={campaign.dailySpendCap}
            onChange={updateCampaignFromFieldChange('dailySpendCap')}
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Lifetime Spend Cap"
            value={campaign.lifetimeSpendCap}
            onChange={updateCampaignFromFieldChange('lifetimeSpendCap')}
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <RadioPicker
            label="Goal"
            options={this.goalOptions}
            value={campaign.goal}
            handleChange={updateCampaignFromFieldChange('goal')}
          />
          <RadioPicker
            label="Ad Type"
            options={this.adTypeOptions}
            value={campaign.adType}
            handleChange={updateCampaignFromFieldChange('adType')}
          />
        </Grid>
      </Grid>
    );
  }
}

Setup.propTypes = {
  classes: PropTypes.object.isRequired,
  // received from ExpansionForm
  updateCompletionStatus: PropTypes.func.isRequired
};

export default withStyles(styles)(Setup);
