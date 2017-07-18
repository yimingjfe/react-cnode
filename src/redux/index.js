import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'

class Index extends Component {
  getChildContext(){
    return { store }
  }
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)

export default connect = (mapStateToProps) => (wrapComponent) => {
  class WrappedComponent extends Component{
    static contextTypes = {
      store: PropTypes.object
    }
    render(){
      const { store } = this.context
      const stateProps = mapStateToProps(store.getState())
      return (<wrapComponent ...stateProps>)
    }
  }
}