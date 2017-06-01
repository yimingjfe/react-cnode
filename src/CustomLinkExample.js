/**
 * Created by yiming on 2017/5/27.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


function getLocation(match, label){
  return {
    pathname: `${match.url}/${label}`,
    breadcrumbName: `Topics/${label}`
  }
}

const Topics = ({ match }) => (
  <div className="topics">
    <h3>Topics</h3>
    <ul>
      <li><ActiveRouteLink to={getLocation(match, 'rendering')} >Rendering with React</ActiveRouteLink></li>
      <li><ActiveRouteLink to={getLocation(match, 'components')}>Components</ActiveRouteLink></li>
      <li><ActiveRouteLink to={getLocation(match, 'props')}>Props v. State</ActiveRouteLink></li>
    </ul>

    <Route exact path={match.url} render={() => (
      <h4>please select a topic</h4>
    )}>
    </Route>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
  </div>
)

const Topic = ( props ) => {
 console.log(props);
 return (
   <h2>{props.match.params.topicId}</h2>
 )
}

const CustomLinkExample = () => (
  <Router>
    <div>
      <ActiveRouteLink to="/" activeOnlyWhenExact={true}>Home</ActiveRouteLink>
      <ActiveRouteLink to="/about">About</ActiveRouteLink>
      <ActiveRouteLink to="/topics">Topics</ActiveRouteLink>
      <hr/>
      <Route exact path="/" breadcrumbName="Home" component={Home}/>
      <Route path="/about" breadcrumbName="About" component={About}/>
      <Route path="/topics" breadcrumbName="Topics" component={Topics}/>
    </div>
  </Router>
)

//写一个可以自动活跃的Link,最好支持多层嵌套
const ActiveRouteLink = ({ to, activeOnlyWhenExact, label, children }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
    return (
      <div className={match ? 'active' : ''}>
        {match ? '> ' : ''}<Link to={to}>{children}</Link>
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

export default CustomLinkExample