import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { Paper } from '@material-ui/core';
import RadioPicker from './radioPicker';
import LocationPicker from './locationPicker';
import withHeader from '../../lib/withHeader';

const styles = theme => ({
  root: {
    padding: 50,
    flexGrow: 1
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: '100%'
  },
  submitButton: {
    width: '200px'
  }
});

class Snapchat extends React.Component {
  goalOptions = [
    'Awareness',
    'App Installs',
    'Drive Traffic to Website',
    'Drive Traffic to App',
    'Engagement',
    'Video Views',
    'Lead Gen',
    'Website Conversions',
    'Catalog Sales'
  ];

  adTypeOptions = ['Image', 'Image Collection', 'Filter'];

  state = {
    locations: []
  };

  handleChange = name => event => {
    const { updateCampaign } = this.props;
    updateCampaign({
      [name]: event.target.value
    });
    // this.setState({
    //   [name]: event.target.value
    // });
  };

  deleteLocation = index => {
    const { locations } = this.state;
    locations.splice(index, 1);
    this.setState({ locations });
  };

  addLocation = loc => {
    this.setState(prevState => ({
      locations: [...prevState.locations, loc]
    }));
  };

  render() {
    const { classes, campaign } = this.props;
    const { goal, adType, locations } = this.state;

    return (
      <div className={classes.root}>
        <Grid container direction="column" spacing={16}>
          <Typography variant="h4">{campaign.name}</Typography>

          <Grid item xs={12}>
            <br />

            <Paper style={{ padding: 10 }}>
              <Typography variant="h6">Ad Description</Typography>
              <hr />
              <TextField
                id="outlined-name"
                label="Headline"
                className={classes.textField}
                value={campaign.headline}
                onChange={this.handleChange('headline')}
                margin="normal"
                variant="outlined"
              />
              <RadioPicker
                label="Goal"
                options={this.goalOptions}
                value={campaign.goal}
                handleChange={this.handleChange('goal')}
              />
              <RadioPicker
                label="Ad Type"
                options={this.adTypeOptions}
                value={campaign.adType}
                handleChange={this.handleChange('adType')}
              />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <br />

            <Paper style={{ padding: 10 }}>
              <Typography variant="h6">Who will see your ad?</Typography>
              <hr />
              <TextField
                id="outlined-name"
                label="Headline"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <RadioPicker
                label="Goal"
                options={this.goalOptions}
                value={goal}
                handleChange={this.handleChange('goal')}
              />
              <RadioPicker
                label="Ad Type"
                options={this.adTypeOptions}
                value={adType}
                handleChange={this.handleChange('adType')}
              />
            </Paper>
          </Grid>

          <Grid item direction="row" xs={12}>
            <Paper style={{ padding: 10 }}>
              <LocationPicker
                locations={locations}
                onAdd={this.addLocation}
                onDelete={this.deleteLocation}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Snapchat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Snapchat);
