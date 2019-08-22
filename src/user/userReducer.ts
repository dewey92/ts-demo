import { UserId, User } from './userTypes'
import { Reducer } from 'redux'
import { addUser, editUser, deleteUser } from './userActions'

type Actions = ReturnType<typeof addUser | typeof editUser | typeof deleteUser>

type UserStore = Record<UserId, User>

const initialState: UserStore = {}

const userReducer: Reducer<UserStore, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const newUser = action.payload
      return {
        ...state,
        [newUser.userId]: newUser,
      }
    }

    case 'EDIT_USER': {
      const userId = action.userId
      const editedUser = action.payload

      if (!state[userId]) return state
      return {
        ...state,
        [userId]: {
          ...state[editedUser.userId],
          ...editedUser,
        },
      }
    }

    case 'DELETE_USER': {
      const deletedUserId = action.userId
      const newState = { ...state }
      delete newState[deletedUserId]

      return newState
    }

    default: {
      return state
    }
  }
}

export default userReducer
