import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrentUser } from './redux/asyncActions/userActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <div className='App'>
      Hello world
    </div>
  );
};

export default App;
