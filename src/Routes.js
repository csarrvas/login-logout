import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SiteRoute from './SiteRoute';
import Home from './pages/Home';
import Register from './pages/user/Register';
import Login from './pages/user/Login';
import Error404 from './pages/Error404';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <SiteRoute exact path='/' component={Home} />
        <SiteRoute exact path='/register' component={Register} />
        <SiteRoute exact path='/login' component={Login} />
        <SiteRoute component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;