// components
import ListPage from "../components/list-page/list-page";
// states
import { asyncReceiveUpcoming } from "../states/upcoming/action";

export default function UpcomingPage() {
  document.title = "Upcoming | Jion";

  return (
    <div className="min-h-screen">
      <ListPage
        title="Upcoming"
        asyncReceiveFunc={asyncReceiveUpcoming}
        dataState="upcoming"
      />
    </div>
  );
}
