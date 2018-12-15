import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { TextField, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  textField: {
    width: '100%'
  }
});

class LocationPicker extends React.Component {

  state = {textFieldValue: ''}

  /**
   * Checks a given location to make sure there are no repeats, etc.
   */
  isValidLocation(loc) {
    return true;
  }

  render() {
    const {classes, locations} = this.props;
    const {textFieldValue} = this.state

    return (
      <div>
        <Grid item xs={12} className={classes.root}>
          {locations.map( (location, index) => (
            <Chip
              key={index}
              label={location}
              // onClick={props.onDelete(index)}
              onDelete={() => this.props.onDelete(index)}
              className={classes.chip}
            />
          ))}
        </Grid>
        <Grid item xs={12} className={classes.root}>
          <TextField
            label="Add Locations"
            id="margin-none"
            defaultValue="California"
            className={classes.textField}
            helperText="Hit enter to add a location"
            value={textFieldValue}
            onChange={event => this.setState({textFieldValue: event.target.value})}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter' && this.isValidLocation()) {
                console.log('Adding location...')
                // stop from entering a form
                ev.preventDefault();
                // add new location
                this.props.onAdd(this.state.textFieldValue)
                // reset text field value
                this.setState({textFieldValue: ''})
              }
            }}
          />
        </Grid>
        
      </div>
      
    );
  }
  
}

LocationPicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationPicker);