import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import { selectReddit, fetchPostsIfNeeded } from '../actions'

class App extends Component {
  selectReddit = nextReddit => {
    this.props.dispatch(selectReddit(nextReddit))
  }

  componentDidMount(){
    const { selectReddit, dispatch } = this.props
    dispatch(fetchPostsIfNeeded(selectReddit))
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectReddit !== this.props.selectReddit){
      const { selectReddit, dispatch } = nextProps
      dispatch(fetchPostsIfNeeded(selectReddit))
    }
  }
  render(){
       const { selectReddit, posts, isFetching } = this.props
       return (
           <div>
             <Picker
               value={selectReddit}
               onChange={this.selectReddit}
               options={[ 'reactjs', 'frontend' ]}
             />
             <div style={{ opacity: isFetching ? 0.5 : 1 }}>
               <Posts posts={posts} />
             </div>
           </div>
       )
   }
}

const mapStateToProps = state => {
  const { selectedReddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedReddit] || {
    isFetching: true,
    items: []
  }
  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}


export default connect(mapStateToProps)(App)

