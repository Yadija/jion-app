import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import SearchModal from './components/Modal/SearchModal';
// context
import { SearchContext } from './context/SearchContext';
// pages
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import NowPage from './pages/NowPage';
import SearchPage from './pages/SearchPage';
import TopAnimePage from './pages/TopAnimePage';
import TopMangaPage from './pages/TopMangaPage';
import TopPage from './pages/TopPage';
import UpcomingPage from './pages/UpcomingPage';

function App() {
  const { isShowSearchModal } = useContext(SearchContext);

  return (
    <main className='background-color-white transition-all duration-1000 selection:bg-fun-blue selection:text-soft-peach selection:dark:bg-denim-blue dark:selection:text-baltic-sea'>
      {isShowSearchModal && <SearchModal />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/now' element={<NowPage />} />
        <Route path='/upcoming' element={<UpcomingPage />} />
        <Route path='/top' element={<TopPage />} />
        <Route path='/top-anime' element={<TopAnimePage />} />
        <Route path='/top-manga' element={<TopMangaPage />} />
        <Route path='/:type' element={<SearchPage />} />
        <Route path='/:type/:id' element={<DetailPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
