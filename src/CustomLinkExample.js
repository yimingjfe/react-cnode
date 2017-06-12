/**
 * Created by yiming on 2017/5/27.
 */
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createBreadcrumb from './Breadcrumbs.js'


const Breadcrumb = createBreadcrumb({
  staticRoutesMap: {
    '/': '首页',
    'about': '关于',
    'topics': '一些话题',
    'rendering': '渲染',
    'component':  '组件',
    'props': '属性'
  }
});

const Topics = ({ match }) => (
  <div className="topics">
    <h3>Topics</h3>
    <ul>
      <li><ActiveRouteLink to='/topics/rendering' label={'Rendering with React'}/></li>
      <li><ActiveRouteLink to='/topics/component' label={'Components'}/></li>
      <li><ActiveRouteLink to='/topics/props' label={'Props v. State'}/></li>
    </ul>

    <Route exact path={match.url} render={() => (
      <h4>please select a topic</h4>
    )}>
    </Route>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
  </div>
)

// const Topic = ( props ) => {
//  console.log(props);
//  return (
//    <h2>{props.match.params.topicId}</h2>
//  )
// }

class Topic extends Component{
  render(){
    return(
      <h2>{this.props.match.params.topicId}</h2>
    )
  }
}

const CustomLinkExample = () => (
  <Router>
    <div>
      <Route render={({ location }) => {
        return (<breadcrumb pathname={location.pathname} />)
      }}/>
      <ActiveRouteLink to="/" activeonlywhenexact={true} label={'home'}/>
      <ActiveRouteLink to="/about" label={'about'}/>
      <ActiveRouteLink to="/about/team" label={'team'}/>
      <ActiveRouteLink to="/topics" label={'topics'}/>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

//写一个可以自动活跃的Link,最好支持多层嵌套
const ActiveRouteLink = ({ to, activeOnlyWhenExact, label, children }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
    return (
      <div className={match ? 'active' : ''}>
        {match ? '> ' : ''}<Link to={to}>{label}</Link>
      </div>
    )
  }}/>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Team = () => (
  <div>
    <h2>Team</h2>
  </div>
)

export default CustomLinkExample