// components
import ListPage from "../components/ListPage/ListPage";
// states
import { asyncReceiveTopManga } from "../states/topManga/action";

export default function TopMangaPage() {
  document.title = "Top Manga | Jion";

  return (
    <div className="min-h-screen">
      <ListPage
        title="Top Manga"
        asyncReceiveFunc={asyncReceiveTopManga}
        dataState="topManga"
      />
    </div>
  );
}
