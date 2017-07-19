function makeActionCreator(type, ...argNames){
    return (...args) => {
        let action = { type }
        argNames.forEach( (argName, index ) => {
            action[argName] = args[index]
        })
        return action
    }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const selectReddit = makeActionCreator(SELECT_REDDIT, 'selectedReddit')
export const receivePosts = makeActionCreator(RECEIVE_POSTS, 'reddit', 'posts')
export const requestPosts = makeActionCreator(REQUEST_POSTS, 'selectedReddit')

//dispatch fetchPostsIfNeeded是一个函数有什么用
//当 action 创建函数返回函数时，这个函数会被 Redux Thunk middleware 执行。这个函数并不需要保持纯净
export const fetchPostsIfNeeded = reddit => ( dispatch, getState ) => {
  dispatch(requestPosts)
  return fetch('https://www.reddit.com/r/${reddit}.json')
    .then(res => res.json())
    .then(json => dispatch(receivePosts(reddit, json)))
}


// {
//   selectedsubreddit: 'frontend',
//     postsBySubreddit: {
//   frontend: {
//     isFetching: true,
//       didInvalidate: false,
//       items: []
//   },
//   reactjs: {
//     isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [
//       {
//         id: 42,
//         title: 'Confusion about Flux and Relay'
//       },
//       {
//         id: 500,
//         title: 'Creating a Simple Application Using React JS and Flux Architecture'
//       }
//     ]
//   }
// }
// }

