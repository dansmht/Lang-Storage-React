import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrentUser } from './redux/actions/userActions';
import Container from './components/layout/Container/Container';
import Header from './components/layout/Header/Header';
import RouterSwitch from './components/RouterSwitch/RouterSwitch';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <div className='App'>
      <Container>
        <Header />
        <RouterSwitch />
      </Container>
    </div>
  );
};

export default App;
