import React from 'react';
import Header from '../components/header';

const styles = {
  root: {
    flexGrow: 1,
  },
}

/**
 * WithAuthStateListener
 *   HOC that wraps an auth state listener onto child component.
 *   REQUIRES firebase as a prop
 */
export default (Page) => {
  return class PageWithAuthStateListener extends React.Component {

    state = {
      user: null
    }

    componentWillMount() {
      // add listener
      this.listenForAuthStateChange();
    }
  
    componentWillUnmount() {
      // decompose auth listener
      this.firebaseAuthListener && this.firebaseAuthListener()
      this.firebaseAuthListener = null
    }

    // Listens for auth state change, and applies the changes to component state
    // TODO - make this a wrapper isntead of implementing every time
    listenForAuthStateChange = () => {
      const { firebase } = this.props;
      this.firebaseAuthListener = firebase.auth().onAuthStateChanged((user) => {
        this.setState(user);
      });
    }

    render () {
      return (
          <Page {...this.props} user={this.state.user} />
      )
    }
  }
}
