import { combineReducers } from 'redux'
import * as handlers from './handlers'
import {
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'


const selectedReddit = createReducers('reactjs', handlers)
// const postsBySubreddit = createReducers({
//   isFetching: false,
//   didInvalidate: false,
//   items: []
// }, handlers)

//reducer的减少模板代码并不可行
//多个action type对应一个handler的情况没有处理
//深层嵌套的对象属性无法处理
const postsBySubreddit = (state = {}, action) => {
  switch(action.type){
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.selectedReddit]: posts(state[action.selectedReddit], action)
      }
    default:
      return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
      Object.assign({}, state, {
        items: action.posts
      })
  }
}

//reducer的名与reducer的处理函数名一样与要处理的属性一样
const rootReducer = combineReducers({
  selectedReddit,
  postsBySubreddit
})

export default rootReducer

//handler根据action type取处理
function createReducers(initialState, handlers) {
  return (state = initialState, action) => {
    if(handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}