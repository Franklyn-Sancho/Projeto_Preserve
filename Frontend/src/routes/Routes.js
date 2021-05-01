import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {
  Main,
  PageSearch,
  Mission,
  About,
  Seja
} from '../pages/index';

export default function Router() {
  return(
    <BrowserRouter>
      <Switch/>
        <Route exact path='/' component={Main} />
        <Route path='/Seja' component={Seja} />
        <Route path='/Pesquisa' component={PageSearch} />
        <Route path='/Missão' component={Mission} />
        <Route path='/Sobre' component={About} />
        <Redirect from='*' to='/' />
    </BrowserRouter>
  )
}
 