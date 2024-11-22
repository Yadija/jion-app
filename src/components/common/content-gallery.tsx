// components
import CardList from "@/components/common/card-list";
import Loading from "@/components/common/loading";
import MessageError from "@/components/common/message-error";
import Pagination from "@/components/common/pagination";
// types
import { Card } from "@/types/card.type";
import { Pagination as IPagination } from "@/types/pagination.type";

interface Content {
  data: Card[];
  pagination: IPagination;
}

interface ContentGalleryProps {
  title: string;
  page: number;
  content: Content | null;
  isLoading: boolean;
  type: "Anime" | "Manga" | "Producer";
  search?: string;
}

export default function ContentGallery({
  title,
  page,
  content,
  isLoading,
  type,
  search,
}: ContentGalleryProps) {
  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !content?.data) {
    return <Loading />;
  }

  const { data, pagination } = content;
  const none = data.length === 0;

  if (pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (none && search) {
    return (
      <MessageError title="No Result" message={`No result for "${search}"`} />
    );
  }

  if (none) {
    return <MessageError title="No content" message="No content here" />;
  }

  return (
    <section className="flex flex-col justify-between px-16 xs:px-12">
      <h1
        className={`mb-4 text-xl font-bold ${search ? "text-baltic-sea dark:text-soft-peach" : "text-center text-2xl"}`}
      >
        {search ? `Search ${type}: ${search}` : title}
      </h1>
      <section className="grow">
        <CardList data={data} />
      </section>
      <Pagination pagination={pagination} />
    </section>
  );
}