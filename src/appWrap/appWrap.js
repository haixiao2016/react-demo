import React from 'react'
import {
  BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import ProList from '../proList/proList'
import Details from '../details/details'
import NotFund from '../404/404'
import Header from '../header/header'

export default class AppWrap extends React.Component{
  render() {
    return (
      <div>
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path = '/' component = { ProList }/>
            <Route path = '/details/:id' component = { Details }/>
            <Route component = { NotFund }/>
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}

