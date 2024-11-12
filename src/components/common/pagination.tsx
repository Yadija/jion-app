import { parseAsInteger, useQueryState } from "nuqs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// hooks
import { DOTS, usePagination } from "@/hooks/use-pagination";
// types
import type { Pagination } from "@/types/pagination.type";

interface PaginationProps {
  pagination: Pagination;
}

export default function Pagination({ pagination }: PaginationProps) {
  const { current_page: currentPage, last_visible_page: lastVisiblePage } =
    pagination;

  const [, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ history: "push" }),
  );

  const paginationRange = usePagination({
    currentPage,
    totalPageCount: lastVisiblePage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <section className="flex justify-center py-10 text-baltic-sea dark:text-soft-peach">
      <ul className="inline-flex text-xl">
        <li className="flex px-3">
          <button
            type="button"
            className={`m-auto ${
              currentPage === 1
                ? "cursor-default"
                : "hover:text-fun-blue hover:dark:text-denim-blue"
            }`}
            onClick={
              currentPage === 1 ? undefined : () => setPage(currentPage - 1)
            }
          >
            <FiChevronLeft />
          </button>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber + Math.random()} className="cursor-default">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={`px-3 hover:hover:text-fun-blue hover:dark:text-denim-blue ${
                pageNumber === currentPage &&
                "text-fun-blue dark:text-denim-blue"
              }`}
            >
              <button
                type="button"
                className={pageNumber === currentPage ? "cursor-default" : ""}
                onClick={
                  typeof pageNumber === "number" &&
                  (pageNumber === currentPage || pageNumber > lastVisiblePage)
                    ? undefined
                    : () => setPage(Number(pageNumber))
                }
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li className="flex px-3">
          <button
            type="button"
            className={`m-auto ${
              currentPage === lastVisiblePage
                ? "cursor-default"
                : "hover:hover:text-fun-blue hover:dark:text-denim-blue"
            }`}
            onClick={
              currentPage === lastVisiblePage
                ? undefined
                : () => setPage(currentPage + 1)
            }
          >
            <FiChevronRight />
          </button>
        </li>
      </ul>
    </section>
  );
}
