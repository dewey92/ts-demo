import { User, UserId } from './userTypes'

export const addUser = (payload: User) => ({
  type: 'ADD_USER' as const,
  payload,
})

export const editUser = (userId: UserId, payload: User) => ({
  type: 'EDIT_USER' as const,
  userId,
  payload,
})

export const deleteUser = (userId: UserId) => ({
  type: 'DELETE_USER' as const,
  userId,
})
