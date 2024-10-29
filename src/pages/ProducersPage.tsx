// components
import ListPage from "../components/ListPage/ListPage";
// states
import { asyncReceiveProducers } from "../states/producers/action";

export default function ProducersPage() {
  document.title = "Producers | Jion";
  return (
    <div className="min-h-screen">
      <ListPage
        title="Producers"
        asyncReceiveFunc={asyncReceiveProducers}
        dataState="producers"
        producers
      />
    </div>
  );
}
