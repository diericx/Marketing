import React from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import {startClock, serverRenderClock} from '../store'
import Examples from '../components/examples'

class Index extends React.Component {
  // static getInitialProps ({ reduxStore, req }) {
  //   console.log(reduxStore.getState())
  //   return reduxStore.getState()
  // }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    console.log(this.props)
    return (
      <div>
        Index page!
        Chocolates exist: {this.props.chocolates == null ? 'false' : 'true'}
        {this.props.chocolates ? this.props.chocolates.map(chocolate => (
          <div>
            {chocolate.name}
          </div>
          )
        ): 'DNE'} 
      </div>
    )
  }
}

export default compose(
  firestoreConnect(['chocolates']),
  connect(({ firestore: { ordered } }, props) => ({
    chocolates: ordered.chocolates
  }))
)(Index)
