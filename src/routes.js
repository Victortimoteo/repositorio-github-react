import React from 'react';

import Main from './pages/Main';
import Repository from './pages/Repository';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
