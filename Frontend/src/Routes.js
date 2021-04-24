import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Main from './template/Main'
import Seja from './template/Seja'
import PageSearch from './template/PageSearch'
import Mission from './template/Mission'
import About from './template/About'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
 <Switch>
     <Route exact path='/' component={Main} />
     <Route path='/Seja' component={Seja} />
     <Route path='/Pesquisa' component={PageSearch} />
     <Route path='/Missão' component={Mission} />
     <Route path='/Sobre' component={About} />
     <Redirect from='*' to='/' />
 </Switch>