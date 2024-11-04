import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";

// components
import SearchModal from "@/components/common/search-modal";
// hooks
import { useSearch } from "@/hooks/use-search";
// pages
import AnimePage from "@/pages/anime-page";
import DetailAnimePage from "@/pages/detail-anime.page";
import DetailMangaPage from "@/pages/detail-manga.page";
import DetailProducerPage from "@/pages/detail-producer-page";
import FavoritePage from "@/pages/favorite-page";
import HomePage from "@/pages/home-page";
import MangaPage from "@/pages/manga-page";
import NotFoundPage from "@/pages/not-found-page";
import NowPage from "@/pages/now-page";
import ProducersPage from "@/pages/producers-page";
import TopAnimePage from "@/pages/top-anime-page";
import TopMangaPage from "@/pages/top-manga-page";
import TopPage from "@/pages/top-page";
import UpcomingPage from "@/pages/upcoming-page";

export default function App() {
  const { isShowSearchModal, toggleCloseSearchModal } = useSearch();
  const { pathname } = useLocation();

  useEffect(() => {
    toggleCloseSearchModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/now",
      element: <NowPage />,
    },
    {
      path: "/upcoming",
      element: <UpcomingPage />,
    },
    {
      path: "/top",
      element: <TopPage />,
    },
    {
      path: "/top/anime",
      element: <TopAnimePage />,
    },
    {
      path: "/top/manga",
      element: <TopMangaPage />,
    },
    {
      path: "/anime",
      element: <AnimePage />,
    },
    {
      path: "/manga",
      element: <MangaPage />,
    },
    {
      path: "/producers",
      element: <ProducersPage />,
    },
    {
      path: "/anime/:id",
      element: <DetailAnimePage />,
    },
    {
      path: "/manga/:id",
      element: <DetailMangaPage />,
    },
    {
      path: "/producer/:id",
      element: <DetailProducerPage />,
    },
    {
      path: "/favorite/:type",
      element: <FavoritePage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <main className="background-color-white min-h-screen transition-all duration-1000 selection:bg-fun-blue selection:text-soft-peach selection:dark:bg-denim-blue dark:selection:text-baltic-sea">
      {isShowSearchModal && <SearchModal />}
      {element}
    </main>
  );
}
