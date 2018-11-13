import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Router from 'next/router';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';

const styles = {
  root: {
    width: '100%',
    height: 200,
  }
}

function NewCampaignButton(props) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: props.mainColor || '#FFFC00',
        dark: props.darkColor || '#f7f400'
      },
      secondary: purple,
      error: red,
    },
  });

  const goToPage = () => {
    const {href} = props;
    Router.push(href);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Button color="primary" variant="contained" onClick={goToPage} style={styles.root}>{props.children}</Button>
    </MuiThemeProvider>
  )
}

export default NewCampaignButton