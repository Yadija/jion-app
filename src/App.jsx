import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NowPage from './pages/NowPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/now" element={<NowPage />} />
      </Routes>
    </main>
  );
}

export default App;
