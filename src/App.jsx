import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NowPage from './pages/NowPage';
import UpcomingPage from './pages/UpcomingPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/now" element={<NowPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
      </Routes>
    </main>
  );
}

export default App;
