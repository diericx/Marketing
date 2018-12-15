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
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

function RadioPicker(props) {
  const { value, classes } = props;

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">{props.label}</FormLabel>
      <RadioGroup
        aria-label="Goal"
        name="goal"
        className={classes.group}
        value={value}
        onChange={props.handleChange}
      >
        {props.options.map(option => (
          <FormControlLabel
            value={option.title}
            disabled={option.disabled || false}
            control={<Radio />}
            label={option.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

RadioPicker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioPicker);
