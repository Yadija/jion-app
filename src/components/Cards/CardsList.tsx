// component
import CardItem from "./CardItem";

export default function CardsList({ data }: any) {
  return (
    <div className="grid gap-x-4 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data.map((item: any) => (
        <CardItem key={item.mal_id} {...item} />
      ))}
    </div>
  );
}
