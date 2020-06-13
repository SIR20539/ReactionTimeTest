import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from '../components/Views';

function App() {
  return (
    <Router>
      <Views />
    </Router>
  );
}

export default App;
