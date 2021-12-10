import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

import ChatFeed from './ChatFeed';
import Login from './Login';

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/chats' element={<ChatFeed />} />
            <Route path='/' element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
