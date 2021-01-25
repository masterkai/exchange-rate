const initialState = {
  name: 'masterkai',
  loggedIn: false
}

export function userReducer(state = initialState, action) {
  return state
}

// selector
export const getName = (state) => state.user.name