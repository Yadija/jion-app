// components
import CardItem, { CardItemProps } from "@/components/common/card-item";

interface CardsListProps {
  data: CardItemProps[];
}

export default function CardsList({ data }: CardsListProps) {
  return (
    <section className="grid gap-x-4 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </section>
  );
}
