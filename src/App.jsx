import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCurrentUser } from './redux/asyncActions/userActions';
import WelcomePage from './components/WelcomePage/WelcomePage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route path='/welcome' exact>
          <WelcomePage />
        </Route>
        <Route>
          <Redirect to='/welcome' />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
