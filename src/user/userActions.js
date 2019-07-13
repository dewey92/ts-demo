export const addUser = payload => ({
  type: 'ADD_USER',
  payload,
})

export const editUser = (userId, payload) => ({
  type: 'EDIT_USER',
  userId,
  payload,
})

export const deleteUser = userId => ({
  type: 'DELETE_USER',
  userId,
})
