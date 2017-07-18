function createStore(rootReducer, initialState = null){
	let state = initialState
	const listeners = []
	const getState = () => {
		return state
	}
	const dispatch = (action) => {
		state = rootReducer(action, store.state)
		listeners.forEach(listener => {
			listener()
		})
	}
	const subscribe = (listener) =>{
		listeners.push(listener)
	}
	return {getState, dispatch, subscribe}
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

export default const store = createStore(themeReducer)


