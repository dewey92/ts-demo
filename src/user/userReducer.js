const initialState = {}

export default function userReducer(state = initialState, action) {
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
          ...state[editedUser.id],
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
