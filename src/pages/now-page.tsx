// components
import ListPage from "../components/list-page/list-page";
// states
import { asyncReceiveNow } from "../states/now/action";

export default function NowPage() {
  document.title = "Now | Jion";

  return (
    <div className="min-h-screen">
      <ListPage
        title="Now"
        asyncReceiveFunc={asyncReceiveNow}
        dataState="now"
      />
    </div>
  );
}
