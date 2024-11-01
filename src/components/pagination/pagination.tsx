import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

// hooks
import { DOTS, usePagination } from "../../hooks/use-pagination";
// types
import type { Pagination } from "../../types/pagination.type";

interface PaginationProps {
  pagination: Pagination;
}

export default function Pagination({ pagination }: PaginationProps) {
  const { current_page: currentPage, last_visible_page: lastVisiblePage } =
    pagination;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const paginationRange = usePagination({
    currentPage,
    totalPageCount: lastVisiblePage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className="text-color-black flex justify-center py-10">
      <ul className="inline-flex text-xl">
        <li className="flex px-3">
          <button
            type="button"
            className={`m-auto ${
              currentPage === 1 ? "cursor-default" : "hover:text-color-blue"
            }`}
            onClick={
              currentPage === 1
                ? undefined
                : () => navigate(`${pathname}?page=${currentPage - 1}`)
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
              className={`hover:text-color-blue px-3 ${
                pageNumber === currentPage && "text-color-blue"
              }`}
            >
              <button
                type="button"
                className={pageNumber === currentPage ? "cursor-default" : ""}
                onClick={
                  typeof pageNumber === "number" &&
                  (pageNumber === currentPage || pageNumber > lastVisiblePage)
                    ? undefined
                    : () => navigate(`${pathname}?page=${pageNumber}`)
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
                : "hover:text-color-blue"
            }`}
            onClick={
              currentPage === lastVisiblePage
                ? undefined
                : () => navigate(`${pathname}?page=${currentPage + 1}`)
            }
          >
            <FiChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
}
