/**
 * Created by yiming on 2017/6/16.
 */
import React, { Component } from 'react'
import {
  Router as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const AuthExample = () => {
  return (
    <Router>
      <div>
        <AuthButton/>
        <Link to="public-page" />
        <Link to="protected-page" />

        <Route path="/public-page" component={PublicPage} />
        <Route path="/login" component={ProtectedPage} />
        <PrivateRoute path="/protected-page" component={ProtectedPage}></PrivateRoute>
      </div>
    </Router>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({Component, ...rest}) => {
  return(
      <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/login',
              state: {from: props.location}
            }}/>
            )
        )}/>
      )
}

const AuthButton = withRouter(({history}) => {
  return (
      fakeAuth.isAuthenticated ? (
          <div>You are not logged in.</div>
      ) : (
          <p>
            Welcome!<button onClick={
            () => fakeAuth.signout(() => history.push('/'))
            }>Sign out</button>
          </p>
      )
  )
})

const Login = (props) => {
  return (

  )
}

class Login extends Component{

}

const PublicPage = () => {
  return (
      <h2>public-page</h2>
  )
}

const ProtectedPage = () => {
  return(
      <h2>protected-page</h2>
  )
}