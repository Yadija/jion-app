import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import NowPage from './pages/NowPage';
import UpcomingPage from './pages/UpcomingPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
      </Routes>
    </main>
  );
}

export default App;
