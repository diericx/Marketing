import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class Platforms extends React.Component {
  state = {
    snapchat: true,
    instagram: false,
    facebook: false
  };

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

  // When a checkbox is toggled, simple flip the value in the campaign's 'platforms' field
  onChange = field => (event, checked) => {
    const { updateCampaign } = this.props;
    updateCampaign({
      [field]: checked
    });
  };

  /**
   * Returns if this section is complete
   */
  isComplete() {
    const { campaign } = this.props;
    return (
      campaign.platforms.snapchat || campaign.platforms.instagram || campaign.platforms.facebook
    );
  }

  render() {
    const { classes, campaign } = this.props;
    const { snapchat, instagram, facebook } = campaign.platforms;

    return (
      <div className={classes.root}>
        <Grid container direction="row" spacing={16}>
          <Grid item xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Choose the platforms you want your ads on</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={snapchat} onChange={this.onChange('platforms.snapchat')} />
                  }
                  label="Snapchat"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={facebook} onChange={this.onChange('platforms.facebook')} />
                  }
                  label="Instagram"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={instagram} onChange={this.onChange('platforms.instagram')} />
                  }
                  label="Facebook"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Platforms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Platforms);
