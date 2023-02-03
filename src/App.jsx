import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import NowPage from './pages/NowPage';
import UpcomingPage from './pages/UpcomingPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
