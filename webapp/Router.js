import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom'

import Layout from './components/Layout'

import LoggedOutHomePage from './pages/LoggedOutHomePage'
import LogoutPage        from './pages/LogoutPage'
import LoggedInHomePage  from './pages/LoggedInHomePage'
import SignupPage        from './pages/SignupPage'
import LoginPage         from './pages/LoginPage'
import NotFoundPage      from './pages/NotFoundPage'

export default function Router({appState}){
  // if (false) { //(!appState.currentUser){
  if (!appState.currentUser){
    return <BrowserRouter>
      <Layout>
        <Route exact path="/" component={LoggedOutHomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/logout" render={()=><Redirect to="/" />}/>
      </Layout>
    </BrowserRouter>
  }

  return <BrowserRouter>
    <Layout>
      <Route exact path="/" component={LoggedInHomePage}/>
      <Route exact path="/login" render={()=><Redirect to="/" />}/>
      <Route exact path="/signup" render={()=><Redirect to="/" />}/>
      <Route exact path="/logout" component={LogoutPage} />
    </Layout>
  </BrowserRouter>
}
