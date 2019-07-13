import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const UserProfile = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.age}</p>
    <p>{user.email}</p>
  </div>
)

const mapState = (state, props) => ({
  user: state.users[props.match.params.id]
})

export default withRouter(
  connect(mapState)(UserProfile)
)
