function makeActionCreator(type, ...argNames){
    return (...args) => {
        let action = { type }
        argNames.forEach( (argName, index ) => {
            action[argName] = action[index]
        })
        return action
    }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const selectReddit = makeActionCreator(SELECT_REDDIT, reddit)

