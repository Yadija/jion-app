// components
import ListPage from "../components/list-page/list-page";
// states
import { asyncReceiveTopManga } from "../states/top-manga/action";

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
