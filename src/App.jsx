import React, { useContext, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// components
import SearchModal from './components/Modal/SearchModal';
// context
import { SearchContext } from './context/SearchContext';
// pages
import DetailPage from './pages/DetailPage';
import DetailProducerPage from './pages/DetailProducerPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import NowPage from './pages/NowPage';
import ProducersPage from './pages/ProducersPage';
import SearchPage from './pages/SearchPage';
import TopAnimePage from './pages/TopAnimePage';
import TopMangaPage from './pages/TopMangaPage';
import TopPage from './pages/TopPage';
import UpcomingPage from './pages/UpcomingPage';

function App() {
  const { isShowSearchModal, toggleCloseSearchModal } = useContext(SearchContext);
  const { pathname } = useLocation();

  useEffect(() => {
    toggleCloseSearchModal();
  }, [pathname]);

  return (
    <main className='background-color-white min-h-screen transition-all duration-1000 selection:bg-fun-blue selection:text-soft-peach selection:dark:bg-denim-blue dark:selection:text-baltic-sea'>
      {isShowSearchModal && <SearchModal />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/now' element={<NowPage />} />
        <Route path='/upcoming' element={<UpcomingPage />} />
        <Route path='/top' element={<TopPage />} />
        <Route path='/top-anime' element={<TopAnimePage />} />
        <Route path='/top-manga' element={<TopMangaPage />} />
        <Route path='/producers' element={<ProducersPage />} />
        <Route path='/producers/:id' element={<DetailProducerPage />} />
        <Route path='/:type' element={<SearchPage />} />
        <Route path='/:type/:id' element={<DetailPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
