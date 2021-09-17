import React from 'react'
import {Switch, Route} from 'react-router'

import Formulario from './components/formulario';
import Home from './components/home';

export default props =>
    <Switch>
        <Route exact path='/formulario' component={Formulario}/>
        <Route exact path='/' component={Home}/>
    </Switch>