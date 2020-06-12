import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import Button from '../components/Button';
import Views from '../components/Views';
function App() {
  return (
    <Router>
      <Views />
      <NavLink to="/">
        <Button text={'back'} />
      </NavLink>
    </Router>
  );
}

export default App;
