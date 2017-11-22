import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from '../routers/Home'
import Products from '../routers/Products'
import Profile from '../routers/Profile'
import Tasks from '../routers/Tasks'
import Clients from '../routers/Clients'
import InfoTasks from '../routers/InfoTasks'

const Main = () => (
    
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/clients' component={Clients}/>
            <Route path='/products' component={Products}/>
            <Route path='/tasks' component={Tasks}/>
            <Route path='/edit_profile' component={Profile}/>
        </Switch>  

    
)

export default Main