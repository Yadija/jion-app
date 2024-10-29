// components
import ListPage from "../components/ListPage/ListPage";
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
