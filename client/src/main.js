import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import VeiwAll from './veiwAll'
import Navbar from './navbar'
import Transfer from './TransferMoney'
import './app.css'
import Home from './home'
import AddOne  from './AddOne';
import Transaction from './transaction';
export default function main() {
    return (
      <div className="tittle">
      <Router>
          <Navbar/>
          <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/all' exact component={VeiwAll}/>
          <Route path='/transfer' exact component={Transfer}/>
          <Route path='/add' exact component={AddOne}/>
          <Route path='/transaction' exact component={Transaction}/>
          </Switch>
      </Router>  
      </div>
    )
}

