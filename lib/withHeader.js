import React from 'react';
import Header from '../components/header';

const styles = {
  root: {
    flexGrow: 1,
  },
}
export default (Page) => {
  return class PageWithHeader extends React.Component {
    render () {
      return (
        <div style={styles.root}>
          <Header />
          <Page {...this.props} />
        </div>
      )
    }
  }
}
