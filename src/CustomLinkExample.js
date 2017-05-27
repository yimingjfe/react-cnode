/**
 * Created by yiming on 2017/5/27.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Topics = ({ match }) => (
  <div className="topics">
    <h3>Topics</h3>
    <ul>
      <li><ActiveRouteLink to={`${match.url}/rendering`} >Rendering with React</ActiveRouteLink></li>
      <li><ActiveRouteLink to={`${match.url}/components`}>Components</ActiveRouteLink></li>
      <li><ActiveRouteLink to={`${match.url}/props`}>Props v. State</ActiveRouteLink></li>
    </ul>

    <Route exact path={match.url} render={() => (
      <h4>please select a topic</h4>
    )}>
    </Route>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
  </div>
)

const Topic = ( { match } ) => (
  <h2>{match.params.topicId}</h2>
)

const CustomLinkExample = () => (
  <Router>
    <div>
      <ActiveRouteLink to="/" activeOnlyWhenExact={true}>Home</ActiveRouteLink>
      <ActiveRouteLink to="/about">About</ActiveRouteLink>
      <ActiveRouteLink to="/topics">Topics</ActiveRouteLink>
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