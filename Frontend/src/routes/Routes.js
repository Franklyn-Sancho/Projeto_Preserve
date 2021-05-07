import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Main, Seja, Mission, About, PageSearch } from '../pages/index';

export default function Routes() {
  return(
    <Switch>
     <Route exact path='/' component={Main} />
     <Route path='/Seja' component={Seja} />
     <Route path='/Pesquisa' component={PageSearch} />
     <Route path='/Missão' component={Mission} />
     <Route path='/Sobre' component={About} />
     <Redirect from='*' to='/' />
   </Switch>
  )
}
 