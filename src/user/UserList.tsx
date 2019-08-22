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
import { TsDemoStore } from '../reducers'

const UsersList: React.FC<MergedProps> = ({ users, ...props }) => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [age, setAge] = React.useState('')

  const onSubmitNeWRoom = () => {
    const userId = new Date().getTime()
    props.addUser({ userId, name, email, age: parseInt(age, 10) })
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

type MergedProps = ReturnType<typeof mapState> & typeof mapDispatch

const mapState = (state: TsDemoStore) => ({
  users: Object.values(state.users),
})

const mapDispatch = { addUser }

export default connect(
  mapState,
  mapDispatch
)(UsersList)
