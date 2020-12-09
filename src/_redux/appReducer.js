const SHOW_ERROR = 'appReducer/SHOW_ERROR'

export const showError = (error) => ({
  type: SHOW_ERROR,
  error,
})

const initialState = {
  error: null,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
export default appReducer
