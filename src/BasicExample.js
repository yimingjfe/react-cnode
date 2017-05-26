/**
 * Created by yiming on 2017/5/26.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

const Topic = ( { match } ) => (
  <h2>{match.params.topicId}</h2>
)

const TopicList = ({ match }) => (
  <div className="topic-list">
    <h3>Topics</h3>
    <ul>
      <li><Link to="{match.url}/rendering">Rendering with React</Link></li>
      <li><Link to="{match.url}/components">Components</Link></li>
      <li><Link to="{match.url}/props">Props v. State</Link></li>
    </ul>

    <Route exact>
      <h4>please select a topic</h4>
    </Route>
    <Route path="{match.url}/:topicList" component={Topic}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/topic-list">topics</Link></li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topic" component={TopicList}/>
    </div>
  </Router>
)
export default BasicExample
