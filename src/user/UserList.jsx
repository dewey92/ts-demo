import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import { addUser } from './userActions'

const UsersList = ({ users, ...props }) => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [age, setAge] = React.useState('')

  const onSubmitNeWRoom = () => {
    const userId = new Date().getTime()
    props.addUser({ userId, name, email, age })
    setName('')
    setEmail('')
    setAge('')
  }

  return (
    <section>
      <header>
        <Typography variant="h3" color="inherit">
          Users List
        </Typography>
        <Typography variant="h6" color="inherit">
          {users.length} user(s)
        </Typography>

        <Grid container direction="column" alignItems="center" spacing={16}>
          <Grid item>
            <TextField
              label="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              margin="dense"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              margin="dense"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Age"
              value={age}
              onChange={e => setAge(e.target.value)}
              margin="dense"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" color="secondary" onClick={onSubmitNeWRoom}>
              Add User
              <Add />
            </Button>
          </Grid>
        </Grid>
      </header>
      <main>
        <List>
          {users.map(user => (
            <ListItem
              component={props => <Link to={`/users/${user.userId}`} {...props} />}
              key={user.userId}
            >
              <ListItemText>{user.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </main>
    </section>
  )
}

const mapState = state => ({
  users: Object.entries(state.users).map(([id, user]) => ({ id, ...user })),
})

const mapDispatch = { addUser }

export default connect(
  mapState,
  mapDispatch
)(UsersList)
