import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';

const App = () => {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <Routes>
          {/* <Route path="/ChatFeed" element={ChatFeed} /> */}
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
