import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import WelcomeSection from '../Sections/WelcomeSection/WelcomeSection';

const RouterSwitch = () => {
  return (
    <Switch>
      <Route path='/welcome' exact>
        <WelcomeSection />
      </Route>
      <Route>
        <Redirect to='/welcome' />
      </Route>
    </Switch>
  );
};

export default RouterSwitch;
