import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const options = [
  'Awareness', 
  'App Installs', 
  'Drive Traffic to Website', 
  'Drive Traffic to App', 
  'Engagement',
  'Video Views',
  'Lead Gen',
  'Website Conversions',
  'Catalog Sales'
]

function GoalPicker(props) {
  const {value, classes} = props;

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Goal</FormLabel>
      <RadioGroup
        aria-label="Goal"
        name="goal"
        className={classes.group}
        value={value}
        onChange={props.handleChange}
      >
        {options.map(option => (
          <FormControlLabel value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

GoalPicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoalPicker);