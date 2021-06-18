import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import WelcomeSection from '../Sections/WelcomeSection/WelcomeSection';
import TopicsSection from '../Sections/TopicsSection/TopicsSection';
import CreateTopicSection from '../Sections/CreateTopicSection/CreateTopicSection';

const RouterSwitch = () => {
  return (
    <Switch>
      <Route path='/welcome' exact>
        <WelcomeSection />
      </Route>
      <Route path='/topics' exact>
        <TopicsSection />
      </Route>
      <Route path='/create-topic' exact>
        <CreateTopicSection />
      </Route>
      <Route>
        <Redirect to='/welcome' />
      </Route>
    </Switch>
  );
};

export default RouterSwitch;
