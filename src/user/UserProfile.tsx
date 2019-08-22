import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { TsDemoStore } from '../reducers'

const UserProfile: React.FC<ReturnType<typeof mapState>> = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.age}</p>
    <p>{user.email}</p>
  </div>
)

const mapState = (state: TsDemoStore, props: RouteComponentProps<{ id: string }>) => ({
  user: state.users[parseInt(props.match.params.id, 10)],
})

export default withRouter(connect(mapState)(UserProfile))
