import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserList, UserProfile } from './user'

const App = () => (
  <Switch>
    <Route exact path="/users/:id" component={UserProfile} />
    <Route exact path="/users" component={UserList} />
    <Redirect exact from="/" to="/users" />
  </Switch>
)

export default App
