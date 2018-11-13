import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';
import NewCampaignButton from './newCampaignButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200px',
  },
  snapchatBtn: {
    width: '100%',
    height: 200,
    // backgroundColor: '#FFFC00'
  }
})

function NewCampaignButtons(props) {
  const { classes } = props;
  return (
    <Grid container direction='row'>

      <Grid item xs={3}>
        <NewCampaignButton href='/new/snapchat' mainColor='#FFFC00'>Snapchat</NewCampaignButton>
      </Grid>

      <Grid item xs={1} />

      <Grid item xs={3}>
        <NewCampaignButton href='/new/snapchat' mainColor='#3B5998' darkColor='#344e87'>Facebook</NewCampaignButton>
      </Grid>
      
    </Grid>
  )
}

export default withStyles(styles)(NewCampaignButtons)