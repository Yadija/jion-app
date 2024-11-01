// components
import ListPage from "../components/list-page/list-page";
// states
import { asyncReceiveTopAnime } from "../states/top-anime/action";

export default function TopAnimePage() {
  document.title = "Top Anime | Jion";
  return (
    <div className="min-h-screen">
      <ListPage
        title="Top Anime"
        asyncReceiveFunc={asyncReceiveTopAnime}
        dataState="topAnime"
      />
    </div>
  );
}
