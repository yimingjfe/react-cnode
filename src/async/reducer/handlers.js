// import {
//   SELECT_REDDIT, INVALIDATE_REDDIT,
//   REQUEST_POSTS, RECEIVE_POSTS
// } from '../actions'

export const SELECT_REDDIT = (state, action) => {
  return state = action.selectedReddit
}

export const RECEIVE_POSTS = (state, action) => {
  return Object.assign({}, state, {
    [action.reddit]: {
      isFetching: false,
      didInvalidate: false,
      items: action.posts
    }
  })
}

