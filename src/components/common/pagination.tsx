import { parseAsInteger, useQueryState } from "nuqs";

// components
import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
    <UIPagination>
      <PaginationContent className="my-5">
        <PaginationItem>
          <PaginationPrevious
            withName={false}
            onClick={
              currentPage === 1 ? undefined : () => setPage(currentPage - 1)
            }
            className={currentPage === 1 ? "cursor-default" : "cursor-pointer"}
          />
        </PaginationItem>

        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <PaginationItem key={pageNumber + Math.random()}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={
                  typeof pageNumber === "number" &&
                  (pageNumber === currentPage || pageNumber > lastVisiblePage)
                    ? undefined
                    : () => setPage(Number(pageNumber))
                }
                isActive={pageNumber === currentPage}
                className={
                  pageNumber === currentPage
                    ? "cursor-default"
                    : "cursor-pointer"
                }
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            withName={false}
            className={
              currentPage === lastVisiblePage
                ? "cursor-default"
                : "cursor-pointer"
            }
            onClick={
              currentPage === lastVisiblePage
                ? undefined
                : () => setPage(currentPage + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
}
