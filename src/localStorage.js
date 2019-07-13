export const loadState = key => {
  const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/
  const reviver = (_, value) =>
    typeof value === 'string' && dateFormat.test(value) ? new Date(value) : value

  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState, reviver)
  } catch (err) {
    return undefined
  }
}

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch {
    // ignore write errors
  }
}
